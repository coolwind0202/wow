import { app } from "server/server";

async function createServer() {
  // ミドルウェアモードで Vite サーバーを作成
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "mpa", // ViteのデフォルトのHTMLを処理するミドルウェアを含めない
  });
  app.use((req, res, next) => {
    vite.middlewares.handle(req, res, next);
  });
}

createServer();