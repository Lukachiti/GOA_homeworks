let http = require("http")

const PORT = 5000

const app = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
    if(req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    let {method, url} = req
    if(method === "GET"){
        res.statusCode(204)
        res.end("everything successful")

    }

})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

