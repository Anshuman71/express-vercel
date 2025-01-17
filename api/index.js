import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://rrv7.vercel.app"],
  })
);

app.get("/test-cors-get", function (req, res) {
  res.status(200).json({ success: true });
});

app.post("/test-cors-post", function (req, res) {
  res.status(200).json({ success: true });
});

// send the about.html file
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "static", "about.html"));
});

app.listen(4000, () => console.log("Server ready on port 4000."));
