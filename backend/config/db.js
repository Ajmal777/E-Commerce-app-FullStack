const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then((res) => console.log("Database connected"))
  .catch((err) => console.log("Failed to connect to database", err));
