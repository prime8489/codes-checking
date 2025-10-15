import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the web page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API route
app.get("/data", (req, res) => {
  const data = {
    message: "Hello from Rehan's API 💫",
    createdBy: "Rehan Ahmad",
    version: "1.0.0",
    serverTime: new Date().toLocaleString(),
  };
  res.json(data);
});

app.listen(3000, () => console.log("✅ API running on port 3000"));
