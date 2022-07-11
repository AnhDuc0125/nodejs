class HomeController {
  index(req, res) {
    // res.render("../src/views", {
    //   message: "This is index method",
    // });
    res.send("<h1>Home Page</h1>");
  }

  test(req, res) {
    // res.render("../src/views", {
    //   message: "ID = " + slug,
    // });
    res.send("<h1>Test Page</h1>");
  }
}

module.exports = new HomeController();
