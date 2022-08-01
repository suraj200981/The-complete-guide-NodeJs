const http = require("http");

const requestHandler = require("./routes.js");

const server = http.createServer((req, res) => {
  requestHandler(req, res);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
