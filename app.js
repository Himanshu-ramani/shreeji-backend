require("dotenv").config();
const express = require("express");
const multer = require("multer");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./Routes/router");
const productsRouter = require("./Routes/products");
const mediaRouter = require("./Routes/media");
const settingsRouter = require("./Routes/settings");
const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(productsRouter);
app.use(mediaRouter);
app.use(settingsRouter);

// Configure multer to specify where to store uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Files will be stored in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define a route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).send("File uploaded successfully.");
});
// get response
// app.get("/",(req,res)=>{
//     res.status(200).json("server start");
// });

// server start
app.listen(PORT, () => {
  console.log(`server start at Port No ${PORT}`);
});
