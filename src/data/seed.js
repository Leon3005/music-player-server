const db = require("../config/connection");
const { Request } = require("../models");

db.once("open", async () => {
  try {
    // Delete all models
    await Request.deleteMany({});

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
