const express = require('express');
const app = express();
const PORT = 3000;
const users = require('./users');

app.use(express.json());


app.get('/api/users', (req, res) => {
    res.status(200).json(users);
    
    console.log("Users:", users);
});
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    
    console.log("New Product:", newProduct);
    res.status(201).json({ message: "Create a new product" });

});

app.put('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    console.log(`Update Product ID: ${productId}`, updatedProduct);
    res.status(200).json({ message: `Update product with ID: ${productId}` });
})
app.delete('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`Delete Product ID: ${productId}`);
    res.status(200).json({ message: `Delete product with ID: ${productId}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


//GET is used to retrieve data from the server
//POST is used to send data to the server to create a new resource
//PUT is used to update an existing resource on the server
//DELETE is used to remove a resource from the server