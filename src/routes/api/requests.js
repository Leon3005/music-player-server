const { Router } = require("express");

const { createRequest } = require("../../controllers/api/requests");

const router = Router();

router.post("/", createRequest);

module.exports = router;
