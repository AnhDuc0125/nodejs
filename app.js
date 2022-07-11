const express = require("express");
const app = express();
const port = 3000;

const route = require("./src/routes/index.route");

//template engine
const pug = require("pug");
app.set("view engine", "pug");

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
