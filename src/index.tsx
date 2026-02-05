import { file, serve } from "bun";
import { htmx, jsx, withMiddleware } from "@/server";
import Page from "@/components/Page";

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
      jsx((req, ser, ctx) => (
        <Page name="Dashboard">
          <Page.Header />
          <Page.Content />
        </Page>
      )),
    ),
    "/ingredients": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => (
        <Page name="Ingredients">
          <h1>Ingredients</h1>
        </Page>
      )),
    ),
    "/products": withMiddleware(
      [htmx],
      jsx((req, ser, ctx) => (
        <Page name="Products">
          <h1>Products</h1>
        </Page>
      )),
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
