const http = require('node:http')

const server = http.createServer((req, res) => {
    const reqUrl = new URL(req.url, `http://${req.headers.host}`)

    const num1 = reqUrl.searchParams.get('num1')
    const num2 = reqUrl.searchParams.get('num2')

    if (!num1 || !num2) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ error: 'Please provide "num1" and "num2" in the URL' }))
    }

    const sum = Number(num1) + Number(num2)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: "Calculation successful", input: { num1: num1, num2: num2 }, result: sum }))
})


server.listen(3600, () => console.log('running on http://localhost:3600'))
