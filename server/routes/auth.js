const router = require("express").Router();
const User = require("../models/User");
var CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

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

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong Password or Username");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

    decryptedData !== req.body.password &&
      res.status(401).json("wrong Password or Username");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc; //EXCLUDE PASSWORD

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// export default router;
