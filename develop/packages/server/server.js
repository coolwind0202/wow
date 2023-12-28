import express from 'express';

const PORT = 3000;

const app = express();

/*
  write routes here except web frontend.
*/

app.get("hello", (req, res) => {
  res.send("world");
});

app.listen(PORT, () => {
  console.log("Server running...");
});

export { app };