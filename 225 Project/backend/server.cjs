const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// JSON File Paths
const partsFilePath = path.join(__dirname, "parts.json");
const customsFilePath = path.join(__dirname, "customs.json");
const prebuildsFilePath = path.join(__dirname, "prebuilds.json");
const supportFilePath = path.join(__dirname, "support.json");
const ordersFilePath = path.join(__dirname, "orders.json");

// Helper Utilities for Safe File Reading/Writing
const readJSON = (filePath, fallback = []) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2));
    return fallback;
  }
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
    return fallback;
  }
};

const writeJSON = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
    return false;
  }
};

// Generate Short Unique Order / Ticket IDs
const generateID = (prefix = "ORD") => {
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `${prefix}-${randomNum}`;
};

// ==========================================
// 1. HARDWARE PARTS API
// ==========================================
app.get("/api/parts", (req, res) => {
  const defaultParts = {
    cpus: [
      "Intel Core i5-13600K",
      "Intel Core i7-14700K",
      "AMD Ryzen 5 7600X",
      "AMD Ryzen 7 7800X3D",
    ],
    gpus: [
      "NVIDIA RTX 4060 8GB",
      "NVIDIA RTX 4070 Super 12GB",
      "NVIDIA RTX 4090 24GB",
      "AMD Radeon RX 7800 XT 16GB",
    ],
    ram: [
      "16GB DDR5 5600MHz",
      "32GB DDR5 6000MHz",
      "64GB DDR5 6400MHz",
    ],
    storage: [
      "1TB NVMe M.2 SSD",
      "2TB NVMe M.2 SSD",
      "4TB NVMe M.2 SSD",
    ],
  };

  const parts = readJSON(partsFilePath, defaultParts);
  res.json(parts);
});

// ==========================================
// 2. PREBUILDS INVENTORY API
// ==========================================
app.get("/api/prebuilds", (req, res) => {
  const prebuilds = readJSON(prebuildsFilePath, []);
  res.json(prebuilds);
});

app.post("/api/prebuilds", (req, res) => {
  const inventory = readJSON(prebuildsFilePath, []);
  const { name, price, description, image, specs } = req.body;

  if (!name || !price || !specs) {
    return res
      .status(400)
      .json({ error: "Name, price, and specs are required fields" });
  }

  const newPc = {
    id: Date.now().toString(),
    name,
    price: Number(price),
    description: description || "",
    image: image || "",
    specs: {
      cpu: specs.cpu || "",
      gpu: specs.gpu || "",
      ram: specs.ram || "",
      storage: specs.storage || "",
      motherboard: specs.motherboard || "",
      psu: specs.psu || "",
      case: specs.case || "",
      cooling: specs.cooling || "",
    },
  };

  inventory.push(newPc);

  if (writeJSON(prebuildsFilePath, inventory)) {
    res.status(201).json(newPc);
  } else {
    res.status(500).json({ error: "Failed to save item to database" });
  }
});

// ==========================================
// 3. CUSTOM PC REQUESTS API
// ==========================================
app.post("/api/customs", (req, res) => {
  const { cpu, gpu, ram, storage, notes } = req.body;

  if (!cpu || !gpu || !ram || !storage) {
    return res
      .status(400)
      .json({ error: "Please select all required hardware parts." });
  }

  const customsList = readJSON(customsFilePath, []);
  const requestId = generateID("CST");

  const newCustomRequest = {
    id: requestId,
    createdAt: new Date().toISOString(),
    cpu,
    gpu,
    ram,
    storage,
    notes: notes || "",
    status: "Request Received",
  };

  customsList.push(newCustomRequest);

  if (writeJSON(customsFilePath, customsList)) {
    res.status(201).json({
      message: "Custom request submitted successfully!",
      requestId,
      request: newCustomRequest,
    });
  } else {
    res.status(500).json({ error: "Failed to save custom request" });
  }
});

// ==========================================
// 4. CHECKOUT & ORDER TRACKING API (NO ACCOUNTS)
// ==========================================

// Create a new purchase
app.post("/api/orders", (req, res) => {
  const { customer, items, totalAmount } = req.body;

  if (!customer?.email || !items || items.length === 0) {
    return res
      .status(400)
      .json({ error: "Customer email and items are required" });
  }

  const orders = readJSON(ordersFilePath, []);
  const orderId = generateID("ORD");

  const newOrder = {
    orderId,
    createdAt: new Date().toISOString(),
    customer: {
      name: customer.name || "Valued Customer",
      email: customer.email,
      phone: customer.phone || "",
      address: customer.address || "",
    },
    items,
    totalAmount: Number(totalAmount) || 0,
    status: "Processing", // Statuses: Processing -> Assembling -> Shipped -> Delivered
    trackingSteps: [
      { step: "Order Placed", completed: true, timestamp: new Date().toISOString() },
      { step: "Components Allocation", completed: false },
      { step: "Assembly & Testing", completed: false },
      { step: "Out for Delivery", completed: false },
    ],
  };

  orders.push(newOrder);

  if (writeJSON(ordersFilePath, orders)) {
    res.status(201).json({
      message: "Order placed successfully!",
      orderId,
      order: newOrder,
    });
  } else {
    res.status(500).json({ error: "Failed to record order" });
  }
});

// Track Order by ID or Email
app.get("/api/orders/track/:query", (req, res) => {
  const { query } = req.params;
  const orders = readJSON(ordersFilePath, []);

  // Search by exact Order ID or by matching Customer Email
  const matchedOrders = orders.filter(
    (o) =>
      o.orderId.toLowerCase() === query.toLowerCase() ||
      o.customer.email.toLowerCase() === query.toLowerCase()
  );

  if (matchedOrders.length === 0) {
    return res.status(404).json({ error: "No orders found matching that ID or email" });
  }

  res.json(matchedOrders);
});

// ==========================================
// 5. SUPPORT TICKETS API
// ==========================================
app.post("/api/support", (req, res) => {
  const { name, email, issueType, description } = req.body;

  if (!name || !email || !description) {
    return res
      .status(400)
      .json({ error: "Name, email, and description are required" });
  }

  const tickets = readJSON(supportFilePath, []);
  const ticketId = generateID("TCK");

  const newTicket = {
    ticketId,
    createdAt: new Date().toISOString(),
    name,
    email,
    issueType: issueType || "general",
    description,
    status: "Open",
  };

  tickets.push(newTicket);

  if (writeJSON(supportFilePath, tickets)) {
    res.status(201).json({
      message: "Support ticket created!",
      ticketId,
      ticket: newTicket,
    });
  } else {
    res.status(500).json({ error: "Failed to save support ticket" });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`PC Mall Backend running on http://localhost:${PORT}`);
});