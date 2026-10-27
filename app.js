const http = require("http");
http.createServer((req, res) => {
  res.end("Hello from my CI/CD pipeline! v2\n");
}).listen(3000);
