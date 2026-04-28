const express = require('express');
require('dotenv').config();

const cors = require('cors');
const helmet = require("helmet")
const connectDB = require('./config/db');

connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
  origin:  process.env.CLIENT_URL,
  credentials: true
}));

app.get("/", (req,res) => {
    res.send("Backend is Running");
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});