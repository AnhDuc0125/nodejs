const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/HomeController");

router.use("/:slug", homeController.test);
router.use("/", homeController.index);

module.exports = router;
