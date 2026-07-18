const http = require("http");
const PORT = 3000;
let arr = [];
const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/users") {
    res.writeHead(200, {
      "Content-Type": "Application/json",
    });

    res.end(JSON.stringify(arr));
  }

  if (req.method == "POST" && req.url == "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      let user = JSON.parse(body);
      const newUser = {
        name: user.name,
        age: user.age,
      };
      arr.push(newUser);
      res.end("new user added");
    });
  }
});

server.listen(PORT, () => {
  console.log(`server hosted on port ${PORT}`);
});
