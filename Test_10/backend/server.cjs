let PORT = 3000
const express = require('express');
const cors = require('cors');
const products = [
  // Electronics
  { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics" },
  { id: 2, name: "Mechanical Keyboard", price: 85.00, category: "Electronics" },
  { id: 3, name: "4K Monitor 27-inch", price: 329.99, category: "Electronics" },
  { id: 4, name: "USB-C Multi-Port Hub", price: 34.50, category: "Electronics" },
  { id: 5, name: "Smart Watch Series 5", price: 199.00, category: "Electronics" },

  // Furniture & Home
  { id: 6, name: "Ergonomic Desk Chair", price: 249.50, category: "Furniture" },
  { id: 7, name: "Standing Desk 55x28", price: 399.99, category: "Furniture" },
  { id: 8, name: "LED Desk Lamp", price: 29.99, category: "Furniture" },
  { id: 9, name: "Stainless Steel Water Bottle", price: 19.99, category: "Home & Kitchen" },
  { id: 10, name: "French Press Coffee Maker", price: 24.95, category: "Home & Kitchen" },

  // Apparel & Fitness
  { id: 11, name: "Running Shoes", price: 120.00, category: "Apparel" },
  { id: 12, name: "Cotton Crewneck Hoodie", price: 45.00, category: "Apparel" },
  { id: 13, name: "Non-Slip Yoga Mat", price: 35.00, category: "Fitness" },
  { id: 14, name: "Adjustable Dumbbell Set", price: 175.00, category: "Fitness" },
  { id: 15, name: "Waterproof Backpack", price: 59.99, category: "Apparel" },

  // Books & Stationery
  { id: 16, name: "Hardcover Dot Journal", price: 14.99, category: "Stationery" },
  { id: 17, name: "Gel Pen Set (12 Pack)", price: 9.99, category: "Stationery" },
  { id: 18, name: "Clean Code Hardcover", price: 42.50, category: "Books" },
  { id: 19, name: "Noise-Canceling Earplugs", price: 18.00, category: "Personal Care" },
  { id: 20, name: "Blue Light Blocking Glasses", price: 16.99, category: "Personal Care" }
];
const app = express()
app.use(cors(
    {
        origin: 'http://localhost:5173',
    }
))
app.use(express.json())



app.get('/products', (req, res) => {
  res.json(products)
})
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  const product = products.find(p => p.id === productId)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ error: "Product not found" })
  }
})

app.post('/products', (req, res) => {
  const product = req.body
  products.push(product)
  res.status(201).json(product)
})




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})