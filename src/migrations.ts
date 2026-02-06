import type Database from "bun:sqlite";
import { migrations } from "@generated/migrations-list";
import { rootLogger } from "@/logger";

interface Migration {
  version: number;
}

const migrationLogger = rootLogger.withTag("migration");

export async function migrateUp(db: Database) {
  ensureMigrationTable(db);
  const currentVersion = getCurrentVersion(db);
  migrationLogger.info(`📊 Current DB Version: ${currentVersion}`);

  let migrationsRun = 0;
  for (const migration of migrations) {
    if (migration.timestamp > currentVersion) {
      migrationLogger.info(`🚀 Running migration: ${migration.name}`);

      const upSql = parseUpSql(migration.sql);

      if (!upSql) {
        migrationLogger.warn(
          `⚠️ No UP migration found in ${migration.name}, skipping.`,
        );
        continue;
      }

      const transaction = db.transaction(() => {
        db.run(upSql);
        updateVersion(db, migration.timestamp);
      });

      try {
        transaction();
        migrationLogger.info(`✅ Migration ${migration.name} applied successfully.`);
        migrationsRun++;
      } catch (error) {
        migrationLogger.error(`❌ Migration ${migration.name} failed`);
        migrationLogger.error(error);
        process.exit(1);
      }
    }
  }

  if (migrationsRun > 0) {
    migrationLogger.info(`🎉 Applied ${migrationsRun} migrations.`);
  } else {
    migrationLogger.info("✨ Database is up to date.");
  }
}

export async function migrateDown(db: Database) {
  ensureMigrationTable(db);
  const currentVersion = getCurrentVersion(db);

  if (currentVersion === 0) {
    migrationLogger.info("⚠️  Database is empty (Version 0). Nothing to rollback.");
    return;
  }

  // Find the migration that matches the current version
  const currentIndex = migrations.findIndex(
    (m) => m.timestamp === currentVersion,
  );

  if (currentIndex === -1) {
    migrationLogger.error(
      `❌ Error: Current DB version (${currentVersion}) not found in migration list. Cannot safely rollback.`,
    );
    process.exit(1);
  }

  const migration = migrations[currentIndex];
  const previousMigration = migrations[currentIndex - 1];
  const targetVersion = previousMigration ? previousMigration.timestamp : 0;

  if (!migration) {
    migrationLogger.error(
      `❌ Error: No migration found for current version ${currentVersion}`,
    );
    process.exit(1);
  }

  migrationLogger.info(`🔙 Rolling BACK: ${migration.name}`);

  const downSql = parseDownSql(migration.sql);

  if (!downSql) {
    migrationLogger.error(
      `❌ Error: No '-- migrate:down' SQL found in ${migration.name}`,
    );
    process.exit(1);
  }

  const transaction = db.transaction(() => {
    db.run(downSql); // Revert Schema Change
    updateVersion(db, targetVersion); // Revert Version
  });

  try {
    transaction();
    migrationLogger.info(`✅ Rollback successful. Now at version: ${targetVersion}`);
  } catch (error) {
    migrationLogger.error(`❌ Rollback failed for ${migration.name}`);
    migrationLogger.error(error);
    process.exit(1);
  }
}

function ensureMigrationTable(db: Database) {
  db.run("CREATE TABLE IF NOT EXISTS _migrations (version INTEGER) STRICT;");
}

function getCurrentVersion(db: Database): number {
  const result = db
    .query("SELECT version FROM _migrations LIMIT 1")
    .get() as Migration | null;
  return result?.version ?? 0;
}

function updateVersion(db: Database, version: number) {
  db.run("DELETE FROM _migrations");
  // Only insert if version > 0 (keep table empty implies version 0, but explicit 0 is fine too)
  if (version > 0) {
    db.run("INSERT INTO _migrations (version) VALUES (?)", [version]);
  }
}

function parseUpSql(content: string): string {
  const upMarker = "-- migrate:up";
  const downMarker = "-- migrate:down";
  const upStart = content.indexOf(upMarker);
  const downStart = content.indexOf(downMarker);

  if (upStart === -1) return content; // No markers = assume all is UP

  // Extract text between UP marker and either DOWN marker or End of File
  let end = content.length;
  if (downStart > upStart) {
    end = downStart;
  }

  return content.slice(upStart + upMarker.length, end).trim();
}

function parseDownSql(content: string): string {
  const downMarker = "-- migrate:down";
  const downStart = content.indexOf(downMarker);

  if (downStart === -1) return ""; // No down marker

  // Down is usually at the end, but technically could be before UP
  // So we take everything from DOWN marker to the end of file...
  // UNLESS the UP marker appears *after* the DOWN marker.
  const upMarker = "-- migrate:up";
  const upStart = content.indexOf(upMarker);

  let end = content.length;
  if (upStart > downStart) end = upStart;

  return content.slice(downStart + downMarker.length, end).trim();
}
