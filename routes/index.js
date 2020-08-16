const express = require("express")
const { index, about, academics, contact, apply } = require("../controllers/index");

const router = express.Router();

router.route("/").get(index);
router.route("/about").get(about);
router.route("/academics").get(academics);
router.route("/contact").get(contact);
router.route("/apply").get(apply);

module.exports = router;