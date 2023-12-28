import express from 'express';
import path from "path";

import copySourceDir from "file_util/src/copySourceDir/index.js";
import { PathIsDirError, PathNotExistsError } from 'file_util/src/copySourceDir/pathAccessErrors.js';

const PORT = 3000;

const app = express();

/*
  write routes here except web frontend.
*/

app.post("/api/deliver", (req, res) => {
  const cwd = process.cwd();
  const local = path.resolve(cwd, "local");
  const delivery = path.resolve(cwd, "delivery");
  try {
    copySourceDir(local, delivery);
    res.status(200);
    res.send("Copying local directory has succeeded.");
  } catch (e) {
    res.status(500);
    console.error(e);
    res.send("Copying local directory has failed. Please check the console.");
  }
});

app.listen(PORT, () => {
  console.log("Server running...");
});

export { app };