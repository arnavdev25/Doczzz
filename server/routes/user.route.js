const User = require("../models/User.model");
const { createUser, logInUser } = require("../controllers/user.controller");
const router = require("express").Router();
router.post("/signup", createUser);
router.post("/login", logInUser);
router.delete("/:id", async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted"))
    .catch((e) => console.log(e));
});
router.get("/", async (req, res) => {
  const r = await User.find();
  res.json(r);
});
module.exports = router;
