import { file, serve } from "bun";
import { htmx, jsx, withMiddleware } from "@server";

const server = serve({
  routes: {
    "/*": {
      GET: async (req) => {
        const pathName = new URL(req.url).pathname;
        const targetFile = file(`public/${pathName}`);
        if (await targetFile.exists()) {
          return new Response(targetFile);
        }
        return new Response(null, { status: 404 });
      },
    },
    "/": Response.redirect("/dashboard", 307),
    "/dashboard": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => <h1>Dashboard</h1>),
    ),
    "/ingredients": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => <h1>Ingredients</h1>),
    ),
    "/products": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => <h1>Products</h1>),
    ),
  },
});

const cleanup = async () => {
  try {
    console.log("⏳ Requesting to stop the server...");
    await server.stop();
    console.log("✅ Server stopped successfully");
  } catch (error) {
    console.log("❌ Server failed to close gracefully, error:", error);
  } finally {
    process.exit(0);
  }
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

console.log(`🚀 Server is running at ${server.url}`);
