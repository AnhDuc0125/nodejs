const homeRouter = require("./home.route");

function route(app) {
  app.use("/home", homeRouter);
}

module.exports = route;
