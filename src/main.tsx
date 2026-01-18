import { file, serve } from "bun";
import { jsx } from "@server";
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
    "/dashboard": jsx(() => <Dashboard isHTMX={false} />),
    "/ingredients": jsx(() => <Ingredients isHTMX={false} />),
    "/products": jsx(() => <Products isHTMX={false} />),
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
