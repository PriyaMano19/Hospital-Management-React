const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 8000;
const DB_URL =
  "mongodb+srv://nishan:nisha123@cluster1.trfvymb.mongodb.net/SPM_DB?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully!!!");
  })
  .catch((err) => console.log("Database connection error", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
