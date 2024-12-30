const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT, DB_SYNC } = require("./config/serverConfig");
const db = require("./models/index");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    if (DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
    console.log(`Server Started on the PORT ${PORT}`);
  });
};

setupAndStartServer();
