const mongoose = require("../_smodel/mongoose");

async function Getallusers({ username, page, pagesize }) {
  const query = {};

  if (username) {
    query.username = username;
  }

  return {
    contents: await mongoose.User.find(query)
      .skip(page * pagesize)
      .limit(pagesize),
    totalElements: await mongoose.User.countDocuments(query),
    page: page,
    pagesize: pagesize,
  };
}

async function CreateUser(user) {
  return new mongoose.User(user).save();
}

async function UpdateUser(id, fields) {
  const user = await mongoose.User.findById(id).exec();

  Object.keys(fields).forEach((key) => {
    user[key] = fields[key];
  });

  await user.save();
  return user;
}

async function Deleteuserbyid(id) {
  const response = await mongoose.User.findByIdAndDelete(id).exec();
  return response !== null;
}

function Getuserbyid(id) {
  const user = mongoose.User.findById(id).exec();
  if (!user) {
    return null;
  }
  return user;
}

module.exports = {
  Getallusers,
  CreateUser,
  UpdateUser,
  Deleteuserbyid,
  Getuserbyid,
};
