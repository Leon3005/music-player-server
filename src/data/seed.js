const db = require("../config/connection");
const { Request } = require("../models");
const requests = require("./requests");

db.once("open", async () => {
  try {
    // Delete all models
    await Request.deleteMany({});

    // Seed requests
    await Request.insertMany(requests);
    console.log("Requests seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
