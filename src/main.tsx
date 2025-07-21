import { file, serve } from "bun";
import { router } from "@server/routes";
import sidebarRoutes from "./sidebarRoutes";

const server = serve({
  routes: router({
    "/*": (p) =>
      p.handle(async (c) => {
        const pathName = new URL(c.request.url).pathname;
        const targetFile = file(`public/${pathName}`);
        if (await targetFile.exists()) {
          return new Response(targetFile);
        }
        return new Response(null, { status: 404 });
      }),
    ...sidebarRoutes(),
  }),
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
