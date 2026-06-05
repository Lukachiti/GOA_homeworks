const http = require('http');
const PORT = 3012;
const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/');

    if (req.method === 'PUT') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString() })
        req.on('end', () => {
            try {
                const updatedData = JSON.parse(body);

                // add data to db
                // send status code and stirgified json

            } catch (err) {

                // 400 
                //  res.end error

            }
        })
    }

    res.end('success');
})

server.listen(PORT, () => console.log('HTTP server running on http://localhost:3012'));