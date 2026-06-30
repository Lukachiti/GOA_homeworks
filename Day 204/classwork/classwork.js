const http = require("http");

const PORT = 5000

const todos = []

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // fake store api
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
    if(req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    const {method, url} = req;
    if(method === "POST"){
        
    }
    if(method === "DELETE"){
        
    }
    if(method === "POST"){
        
    }


   
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
