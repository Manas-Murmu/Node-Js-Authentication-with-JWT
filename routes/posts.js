const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    post: {
      title: "My First Post",
      description: "Learning Backend Node, express, Mongo ",
    },
  });
});

module.exports = router;
