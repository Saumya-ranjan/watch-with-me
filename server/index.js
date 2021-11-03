const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
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

app.use("/server/auth", authRoute); //uses auth route /server/auth/register or login
app.use("/server/users", userRoute); //uses userroute /server/user/:id or /find/:id or /
app.use("/server/movies", movieRoute);
// app.get("/api/auth/login", (req, res) => {
//   res.send({ hello: "world" });
// });

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
