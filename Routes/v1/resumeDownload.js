const express = require("express");
const resumeRoutes = require("../../controllers/resume.controller");
const viewCount = require("../../middleware/ResumeDownCount");
const router = express.Router();

router.route("/").get(viewCount, resumeRoutes.getResume);
module.exports = router;
