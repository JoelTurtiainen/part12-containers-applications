const express = require("express");
const router = express.Router();
const redis = require("../redis");

router.get("/", async (_, res) => {
  const visits = (await redis.getAsync("visits")) ?? 0;
  const addedTodos = (await redis.getAsync("added_todos")) ?? 0;
  console.log(visits, addedTodos);
  res.send({ visits: visits, added_todos: addedTodos });
});

module.exports = router;
