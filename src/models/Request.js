const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requestSchema = {
  artist: {
    type: String,
    required: true,
  },
  songName: {
    type: String,
    required: true,
  },
  songLink: {
    type: String,
    required: true,
  },
};

const RequestSchema = new Schema(requestSchema);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
