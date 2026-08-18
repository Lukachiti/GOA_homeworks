const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3000;

router.get("/", (req, res) => {
    res.send("Hello Express!");
});



router.get("/about", (req, res) => {
    res.send("This is the about page.");
});

router.get("/contact", (req, res) => {
    res.send("This is the contact page.");
});
router.get("products", (req, res) => {
    res.send("This is the products page.");
});

router.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

router.get("/users/:id/posts/:postId", (req, res) => {
    const userId = req.params.id;
    const postId = req.params.postId;
    res.send(`User ID: ${userId}, Post ID: ${postId}`);
});

router.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});