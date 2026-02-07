import { file } from "bun";
import { htmx, jsx, withMiddleware } from "@/server";
import { rootLogger } from "@/logger";
import { dashboard } from "@/views/dashboard";
import { ingredients } from "@/views/ingredients";
import { products } from "@/views/products";

const serverLogger = rootLogger.withTag("server");

export function serve(port: number) {
  const server = Bun.serve({
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
        jsx(() => dashboard()),
      ),
      "/ingredients": withMiddleware(
        [htmx],
        jsx(() => ingredients()),
      ),
      "/products": withMiddleware(
        [htmx],
        jsx(() => products()),
      ),
    },
    port,
  });

  const cleanup = async () => {
    try {
      serverLogger.info("⏳ Requesting to stop the server...");
      await server.stop();
      serverLogger.info("✅ Server stopped successfully");
    } catch (error) {
      serverLogger.error("❌ Server failed to close gracefully, error:", error);
    } finally {
      process.exit(0);
    }
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);

  serverLogger.info(`🚀 Server is running at ${server.url}`);
}
