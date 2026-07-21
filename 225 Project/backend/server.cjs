const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, "inventory.json");

app.use(cors());
app.use(express.json());

const readInventory = () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading database file:", error);
    return [];
  }
};

const writeInventory = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing to database file:", error);
    return false;
  }
};

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
