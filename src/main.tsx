import { file, serve } from "bun";
import { router } from "@server/routes";
import { jsx } from "@server/jsx";
import Skeleton from "./Skeleton";
import Layout from "./Layout";

const server = serve({
  routes: router({
    "/:fileName": (p) =>
      p.handle(async (c) => {
        const targetFile = file(`public/${c.request.params.fileName}`);
        if (await targetFile.exists()) {
          return new Response(targetFile);
        }
        return new Response(null, { status: 404 });
      }),
    "/": (p) =>
      p.handle(
        jsx(() => (
          <Layout name="Test">
            <Skeleton />
          </Layout>
        )),
      ),
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
