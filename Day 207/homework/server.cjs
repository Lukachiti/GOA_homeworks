const PORT = 5000;
const users = [{ name: "luka", age: 15 }];
const cors = require('cors');
const express = require("express");

const server = express();
server.use(cors());


server.get("/users", (req, res) => {
    res.send(users);
});

server.listen(PORT, () => {
    console.log(`successfully running on port ${PORT}`);
});