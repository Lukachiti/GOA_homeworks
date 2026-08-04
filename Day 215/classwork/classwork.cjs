

const express = require("express");
const app = express();
const PORT = 3000;
const loggerM = require("./loggerM");
const timeM = require("./timeM");

app.use(timeM);
app.use(loggerM);
app.use(authM);

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}. You were successful! Yupeeee`);
});

