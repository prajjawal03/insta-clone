const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../keys");
const auth = require("../middlewares/auth");
const User = require("../models/user");

router.get("/", auth, (req, res) => {
  console.log("hello");
  res.send("hello");
});

//@route  post user registration
//@desc   register user
//@access public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ msg: "please enter all fields" });
  try {
    const checkEmail = await User.findOne({ email });
    if (checkEmail) return res.status(422).json({ msg: "user already exists" });
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: hashed,
    });
    await user.save();
    //jsonwebtoken
    const token = await jwt.sign({ _id: user._id }, JWT_KEY);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "internal server error" });
  }
});

//@route  post user login
//@desc   login user
//@access public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "please enter all fields" });
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: "password or email is invalid" });
    //compare password
    const checkpass = bcrypt.compare(password, user.password);
    if (!checkpass)
      return res.status(400).json({ msg: "password or email is invalid" });
    //jsonwebtoken
    const token = await jwt.sign({ _id: user._id }, JWT_KEY);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "internal server error" });
  }
});
module.exports = router;
