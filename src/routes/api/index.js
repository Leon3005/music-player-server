const { Router } = require("express");

const requests = require("./requests");

const router = Router();

router.use("/requests", requests);

module.exports = router;
