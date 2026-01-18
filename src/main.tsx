import { file, serve } from "bun";
import { htmx, jsx, withMiddleware } from "@server";
import Dashboard from "./pages/Dashboard";
import Ingredients from "./pages/Ingredients";
import Products from "./pages/Products";

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
      jsx((req, ser, ctx) => <Dashboard isHTMX={ctx.htmx.isHTMX()} />),
    ),
    "/ingredients": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => <Ingredients isHTMX={ctx.htmx.isHTMX()} />),
    ),
    "/products": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => <Products isHTMX={ctx.htmx.isHTMX()} />),
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
