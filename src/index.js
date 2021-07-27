const express = require("express");
const cors = require("cors");

// const routes = require("./routes");
const db = require("./config/connection");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
