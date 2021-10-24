const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Site loaded");
});

module.exports = router;
