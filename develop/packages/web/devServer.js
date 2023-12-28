import { app } from "server/server.js";
import { createServer as createViteServer } from "vite";

/* for resolving __dirname */
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createServer() {
  // ミドルウェアモードで Vite サーバーを作成
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "mpa", // ViteのデフォルトのHTMLを処理するミドルウェアを含めない
    root: __dirname
  });
  app.use((req, res, next) => {
    vite.middlewares.handle(req, res, next);
  });
  console.log("[debug] create server end");
}

createServer();