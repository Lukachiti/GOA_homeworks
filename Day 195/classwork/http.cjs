const http = require("node:http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});