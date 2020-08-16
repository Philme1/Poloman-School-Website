const express = require("express");

const { course1, course2, course3, course4, course5, course6, course7, course8, course9, course10, course11 } = require("../controllers/course");

const router = express.Router();

router.route("/remedial-studies").get(course1);
router.route("/finishing-studies").get(course2);
router.route("/preliminary-professional").get(course3);
router.route("/foundation-professional").get(course4);
router.route("/professional-ond").get(course5);
router.route("/professional-hnd").get(course6);
router.route("/port-logistics").get(course7);
router.route("/hnd").get(course8);
router.route("/hospitality").get(course9);
router.route("/post-graduate").get(course10);
router.route("/logistics-&-mining").get(course11);

module.exports = router;