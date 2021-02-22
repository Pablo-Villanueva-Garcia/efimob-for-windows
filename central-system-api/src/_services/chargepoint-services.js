const Joi = require("joi");
const mongoose = require("../_smodel/mongoose");
const titleSchema = Joi.string().min(1).max(50).trim();
const legalSchema = Joi.string().min(1).max(50).trim();
const schema = Joi.object({
  title: titleSchema,
  legalentity: legalSchema,
});

function validatetitle(name) {
  const { error, value } = titleSchema.validate(name);
  return { error, value };
}

function validate(identify) {
  const { error, value } = schema.validate(identify);
  return { error, value };
}

function getbyid(id) {
  const organization = mongoose.ChargePoint.findById(id).exec();
  if (!organization) {
    return null;
  }
  return organization;
}

async function getallidentify({ identify, page, pagesize }) {
  const query = {};

  if (identify) {
    query.identify = identify;
  }

  return {
    contents: await mongoose.ChargePoint.find(query)
      .skip(page * pagesize)
      .limit(pagesize),
    totalElements: await mongoose.ChargePoint.count(query),
    page: page,
    pagesize: pagesize,
  };
}

async function createidentify(identify) {
  const newlyCreateidentify = new mongoose.ChargePoint(identify);
  return newlyCreateidentify.save();
}

async function Updateidentify(id, fields) {
  const identify = await mongoose.ChargePoint.findById(id).exec();
  Object.keys(fields).forEach((key) => {
    identify[key] = fields[key];
  });
  await identify.save();
  return identify;
}

async function deletebyid(id) {
  const response = await mongoose.ChargePoint.findByIdAndDelete(id).exec();
  return response !== null;
}

module.exports = {
  getallidentify,
  getbyid,
  getbyid,
  getallidentify,
  Updateidentify,
  createidentify,
  deletebyid,
  validatetitle,
  validate,
};
