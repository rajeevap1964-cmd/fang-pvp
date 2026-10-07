const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 10000;

// Serve everything from the current folder
app.use(express.static(__dirname));

// Main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Health check
app.get("/health", (req, res) => {
    res.status(200).send("FANG.PVP is online!");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🔥 FANG.PVP running on port ${PORT}`);
});