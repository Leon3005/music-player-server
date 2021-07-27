const { Router } = require("express");

const router = Router();

router.post("/", createRequest);

module.exports = router;
