const express = require('express');
require('dotenv').config();

const cors = require('cors');
const helmet = require("helmet")
const connectDB = require('./config/db');
const errorMiddleware = require('./middleware/error.middleware')
const cookieParser = require("cookie-parser")

connectDB();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
  origin:  process.env.CLIENT_URL,
  credentials: true
}));
app.use(cookieParser())

app.get("/", (req,res) => {
    res.send("Backend is Running");
})
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});