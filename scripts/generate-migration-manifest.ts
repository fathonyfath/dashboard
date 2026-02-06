import { readdir, readFile } from "fs/promises";
import { write } from "bun";
import path from "path";

const MIGRATIONS_DIR = path.join(process.cwd(), "migrations");
const OUTPUT_FILE = path.join(process.cwd(), "generated/migrations-list.ts");

console.log("📦 Generating migration manifest...");

const files = (await readdir(MIGRATIONS_DIR))
  .filter((f) => f.endsWith(".sql"))
  .sort();

const migrations = [];
for (const file of files) {
  const content = await readFile(path.join(MIGRATIONS_DIR, file), "utf-8");

  validateMigration(file, content);

  const safeContent = content.replace(/`/g, "\\`");

  const timestampString = file.split("_")[0];
  if (timestampString === undefined || isNaN(parseInt(timestampString))) {
    throw new Error(
      `Invalid migration file name: ${file}. It should start with a timestamp.`,
    );
  }

  migrations.push(`  {
    name: "${file}",
    timestamp: ${parseInt(timestampString)},
    sql: \`${safeContent}\`
  }`);
}

const fileContent = `// This file is auto-generated. Do not edit.
export const migrations = [
${migrations.join(",\n")}
];
`;

await write(OUTPUT_FILE, fileContent);

console.log(
  `✅ Manifest written to ${OUTPUT_FILE} (${migrations.length} files)`,
);

function validateMigration(filename: string, content: string) {
  const upMarker = "-- migrate:up";
  const downMarker = "-- migrate:down";

  const hasUp = content.includes(upMarker);
  const hasDown = content.includes(downMarker);

  if (!hasUp) {
    console.error(
      `\n❌ BUILD FAILED: Migration '${filename}' is missing '${upMarker}'`,
    );
    process.exit(1);
  }

  if (!hasDown) {
    console.error(
      `\n❌ BUILD FAILED: Migration '${filename}' is missing '${downMarker}'`,
    );
    console.error(
      `   (If you truly have no rollback logic, add the marker with an empty body.)`,
    );
    process.exit(1);
  }

  // Optional: Check order (Ensure UP comes before DOWN for consistency)
  if (content.indexOf(upMarker) > content.indexOf(downMarker)) {
    console.warn(
      `\n⚠️ WARNING: In '${filename}', the DOWN block appears before the UP block.`,
    );
    console.warn(`   This is valid but confusing. Consider swapping them.`);
  }
}
