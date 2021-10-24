const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTION SUCCESFULL"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.use("/server/auth", authRoute);

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
