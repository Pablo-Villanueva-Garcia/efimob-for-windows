require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("express-async-errors");
const errorHandler = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 8000;

const Organizationcontroller = require("./_controllers/organization-controller");
const Chargerpointcontroller = require("./_controllers/chargepoint-controller");
const Userscontroller = require("./_controllers/user-controller");
app.use(errorHandler);

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.use("/organization", Organizationcontroller);
app.use("/chargetpoint", Chargerpointcontroller);
app.use("/users", Userscontroller);

app.listen(port, () => {
  console.log(`You are listening port ${port}`);
});
