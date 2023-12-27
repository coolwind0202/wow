import express from 'express';
import { createServer as createViteServer } from 'vite';

const PORT = 3000;

const app = express();

/*
  write routes here except web frontend.
*/

app.listen(PORT, () => {
  console.log("Server running...");
});

export { app };