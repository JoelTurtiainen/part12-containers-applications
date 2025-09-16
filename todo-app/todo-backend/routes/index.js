const express = require("express");
const router = express.Router();
const redis = require("../redis");

const configs = require("../util/config");

/* GET index data. */
router.get("/", async (req, res) => {
  let visits = await redis.getAsync("visits");
  if (isNaN(visits)) visits = 0;
  visits++;
  await redis.setAsync("visits", visits);

  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
