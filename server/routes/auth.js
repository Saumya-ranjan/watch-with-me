const router = require("express").Router();
const User = require("../models/User");
var CryptoJS = require("crypto-js");

//Postman used for sending data to our database to check

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });
  try {
    const user = await newUser.save();
    // we have to wait for new user to be saved then only we can send json file in it
    //so await function is used to make it wait sop it can take some time to savue it

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// export default router;
