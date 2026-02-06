import { file, write } from "bun";
import path from "path";

const args = Bun.argv.slice(2);

if (args.length === 0 || args.length > 1) {
  console.error("❌ Please provide a name for the migration.");
  console.error("   Usage: bun run migration:create <migration-name>");
  process.exit(1);
}

const MIGRATIONS_DIR = path.join(process.cwd(), "migrations");
const timestamp = getTimestamp();
const filename = `${timestamp}_${args[0]}.sql`;
const filePath = path.join(MIGRATIONS_DIR, filename);

await write(
  filePath,
  `-- migrate:up

-- migrate:down
`,
);

console.log(`✅ Migration file created: ${filePath}`);

function getTimestamp(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
