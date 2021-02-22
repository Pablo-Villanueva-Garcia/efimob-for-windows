require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://db:27017/efimob?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Organization = mongoose.model("organization", {
  name: String,
  legalentity: String,
});

const ChargePoint = mongoose.model("chargerpoints", {
  identify: String,
});

const User = mongoose.model("user", {
  username: String,
});

module.exports = {
  Organization,
  ChargePoint,
  User,
};