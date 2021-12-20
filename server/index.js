const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const server = http.createServer(app);
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/test", function (req, res) {
  //   res.send("yo it works.");
  res.status(400).send("This is a custom error message ya.");
});

server.listen(port, () => console.log("server listening... port 3001"));
