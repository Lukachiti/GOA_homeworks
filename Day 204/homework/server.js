const http = require("http");

const PORT = 5000;

let todos = [];

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
    
    if(req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    const {method, url} = req;
    
    if (method === "GET" && url === "/") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
        return;
    }
    
    if(method === "POST" && url === "/"){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const newTodo = JSON.parse(body);
            todos.push(newTodo);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newTodo));
        });
        return;
    }
    
    if(method === "DELETE" && url.startsWith("/")){
        const id = parseInt(url.split("/")[2]);
        todos = todos.filter(t => t.id !== id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
        return;
    }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
