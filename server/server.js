import express from "express";

const app = express();

const PORT = 3000;

const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`server listening at  http://${host}:${port}`);
});
