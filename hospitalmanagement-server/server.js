const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
var cors = require('cors');
app.use(cors());
//import routes
const userRoutes = require("./n_routes/n_users");
const medicine = require('./n_routes/m_Medicine');
const delivary = require('./route/m_delivary');
//middleware
app.use(bodyParser.json());

app.use(userRoutes);

const PORT = 8000;
const DB_URL =
  "mongodb+srv://nishan:nisha123@cluster1.trfvymb.mongodb.net/SPM_DB?retryWrites=true&w=majority";
  

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => console.log("Database connection error", err));
//mathy router

app.use('/medicine', medicine);
app.use('/delivary', delivary);
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
