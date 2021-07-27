const { Request } = require("../../models");

const createRequest = async (req, res) => {
  const { artist, songName, songLink } = req.body;

  const request = {
    artist,
    songName,
    songLink,
  };

  const data = await Request.create(request);

  res.json(data);
};

module.exports = { createRequest };
