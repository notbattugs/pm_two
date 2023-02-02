// Commands to show.
// Start it with pm2 - processoo asaah
// stop the task <id> - processoo zogsooh by id
// deletet the task <id> - processoo delete hiih by id
// reload the task <id> - processoo reload hiih by id
// monit - whole processiig harah

// Task, pm2 deer

import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/home.html"));
});
const PORT = process.env.PORT || 1001;

app.listen(PORT, () => {
  console.log(`[Server] Listening on :${PORT}`);
  console.log("hi");
});
