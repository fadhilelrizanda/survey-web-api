const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const surveyAsuh = require("./routes/asuhRoute");
const personalQuest = require("./routes/personalQuest");
const answerCollect = require("./routes/answerRoute");
const question = require("./routes/questionRoute");
const users = require("./routes/userRoute");

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Increase the timeout to 5 seconds
  socketTimeoutMS: 45000, // Set socket timeout to 45 seconds
});
const database = mongoose.connection;

database.on("error", (error) => {
  console.error("Database connection error:", error);
});

database.once("connected", () => {
  console.log("Database Connected!");
});

const app = express();

app.use(cors());
app.options("*", cors()); // Enable preflight requests for all routes

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use("/surveyasuh", surveyAsuh);
app.use("/personalQuest", personalQuest);
app.use("/answer", answerCollect);
app.use("/question", question);
app.use("/users", users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
