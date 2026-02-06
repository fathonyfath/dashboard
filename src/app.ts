import { Database } from "bun:sqlite";
import { parseArgs } from "util";
import { migrateDown, migrateUp } from "./migrations";
import { unlink } from "fs/promises";
import { basename } from "path";
import { serve } from "./serve";

function lazy<T>(factory: () => T): () => T {
  let instance: T | null = null;
  return () => {
    if (!instance) instance = factory();
    return instance;
  };
}

interface Context {
  dbPath: string;
  db: Database;
}

async function main() {
  const { values, positionals } = parseArgs({
    args: normalizedArgs(),
    options: {
      db: { type: "string", default: "app.db" },
      help: { short: "h", type: "boolean" },
    },
    strict: false,
    allowPositionals: true,
  });

  // [0]=command, [1]=subcommand
  const command = positionals[0] || "start";
  const subCommand = positionals[1];

  if (values.help && !positionals[0]) {
    printHelp();
    return;
  }

  // Initialize Resources (Lazy load DB)
  const getDb = lazy(() => {
    const db = new Database(values.db as string);
    db.run("PRAGMA journal_mode = WAL;");
    return db;
  });

  const context: Context = {
    dbPath: values.db as string,
    get db() {
      return getDb();
    },
  };

  // Route to the handler
  switch (command) {
    case "start":
      await handleStart(context);
      break;

    case "db":
      await handleDb(context, subCommand);
      break;

    default:
      console.error(`Unknown command: ${command}`);
      printHelp();
      process.exit(1);
  }
}

function normalizedArgs(): string[] {
  const [executor] = Bun.argv;
  if (!executor) {
    return [];
  }

  const executorName = basename(executor);
  const isRuntime = executorName.startsWith("bun");

  if (isRuntime) {
    return Bun.argv.slice(2);
  } else {
    return Bun.argv.slice(1);
  }
}

async function handleStart(context: Context) {
  // Parse server-specific flags
  const { values } = parseArgs({
    args: Bun.argv,
    options: {
      port: { type: "string", default: "3000" },
    },
    strict: false,
  });

  const port = parseInt(values.port as string, 10);
  await migrateUp(context.db);
  serve(port);
}

async function handleDb(context: Context, action: string | undefined) {
  switch (action) {
    case "migrate":
    case "up":
      console.info("Running migrations...");
      await migrateUp(context.db);
      break;

    case "rollback":
    case "down":
      console.info("Rolling back...");
      await migrateDown(context.db);
      break;

    case "reset":
      console.warn(`Deleting ${context.dbPath}...`);
      try {
        context.db.close(); // Close existing connection if open
        await unlink(context.dbPath);
        console.info("Deleted.");
      } catch (err) {
        /* Ignore if missing */
      }

      console.info("Re-initializing...");
      // Re-create by accessing the getter again
      const newDb = new Database(context.dbPath);
      newDb.run("PRAGMA journal_mode = WAL;");
      await migrateUp(newDb);
      break;

    default:
      console.error(`Unknown db action: '${action}'`);
      console.log("Available: migrate, rollback, reset");
      process.exit(1);
  }
}

function printHelp() {
  console.log(`
Usage: app <command> [options]

Commands:
  start            Start the web server (Default)
  db migrate       Run pending migrations
  db rollback      Revert the last migration
  db reset         Delete DB and start fresh

Options:
  --db <path>      Database file (default: app.db)
  --port <num>     Port for server (default: 3000)
  --help, -h       Show this help
  `);
}

main();
