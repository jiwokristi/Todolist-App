"use strict";

const express = require("express");
const cors = require("cors");

const Controller = require("./controllers");
const errorHandlers = require("./middlewares/errorHandlers");

const app = express();
const port = 3000;

app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

  .get("/", Controller.index)
  .post("/post", Controller.post)
  .delete("/:id/delete", Controller.delete)
  .patch("/:id/patch", Controller.patch)

  .use(errorHandlers);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
