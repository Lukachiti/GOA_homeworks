const PORT = 3000;

const express = require("express");
const app = express();
app.get("/Welcome", (req, res) => {
  res.send("This is the Welcome page");
});
app.get("/profile", (req, res) => {
  res.send({
    name: "Nika",
    age: 20,
  });
});
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send({
    "id": userId,
});
});

app.get("/users/:id/posts/:postId", (req, res) => {
  const userId = req.params.id;
  const postId = req.params.postId;
  res.send({
    "userId": userId,
    "postId": postId
  });
});




app.get("/products", (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  res.send({
    page,
    limit
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
