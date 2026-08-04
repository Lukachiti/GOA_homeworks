const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

const DATA_FILE = path.join(__dirname, "inventory.json");
const PARTS_FILE = path.join(__dirname, "parts.json");

app.use(cors());
app.use(express.json());

// ==========================================
// HELPER FUNCTIONS
// ==========================================

const readInventory = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading inventory file:", error);
    return [];
  }
};

const writeInventory = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing to inventory file:", error);
    return false;
  }
};

const readParts = () => {
  try {
    if (!fs.existsSync(PARTS_FILE)) {
      return { cpus: [], gpus: [], ram: [], storage: [] };
    }
    const data = fs.readFileSync(PARTS_FILE, "utf8");
    return JSON.parse(data || "{}");
  } catch (error) {
    console.error("Error reading parts database:", error);
    return { cpus: [], gpus: [], ram: [], storage: [] };
  }
};

// ==========================================
// PREBUILDS ENDPOINTS
// ==========================================

app.get("/api/prebuilds", (req, res) => {
  const inventory = readInventory();
  res.json(inventory);
});

app.get("/api/prebuilds/:id", (req, res) => {
  const inventory = readInventory();
  const pc = inventory.find((item) => item.id === req.params.id);

  if (!pc) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(pc);
});

app.post("/api/prebuilds", (req, res) => {
  const inventory = readInventory();
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

  if (writeInventory(inventory)) {
    res.status(201).json(newPc);
  } else {
    res.status(500).json({ error: "Failed to save item to database" });
  }
});

// ==========================================
// CUSTOM BUILD PARTS ENDPOINTS
// ==========================================

app.get("/api/parts", (req, res) => {
  const parts = readParts();
  res.json(parts);
});

app.post("/api/customs", (req, res) => {
  const { cpu, gpu, ram, storage, notes } = req.body;
  console.log("Received Custom Build Request:", { cpu, gpu, ram, storage, notes });

  res.status(201).json({
    message: "Custom request received successfully!",
    request: req.body,
  });
});

// ==========================================
// SUPPORT ENDPOINT
// ==========================================

app.post("/api/support", (req, res) => {
  const { name, email, issueType, description } = req.body;
  console.log("Received Support Ticket:", { name, email, issueType, description });

  res.status(201).json({
    message: "Support ticket opened successfully!",
    ticket: req.body,
  });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});