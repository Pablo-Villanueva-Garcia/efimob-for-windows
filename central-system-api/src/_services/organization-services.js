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

function validate(organization) {
  const { error, value } = schema.validate(organization);
  return { error, value };
}

function getbyid(id) {
  const organization = mongoose.Organization.findById(id).exec();
  if (!organization) {
    return null;
  }
  return organization;
}

async function getallorganization({ page, pagesize , name, legalentity}) {
  const query = {};

  if (name) {
    query.name = name;
  }
  if (legalentity) {
    query.legalentity = legalEntity;
  }
  return {
    contents: await mongoose.Organization.find(query)
      .skip(page * pagesize)
      .limit(pagesize),
    totalElements: await mongoose.Organization.count(query),
    page: page,
    pagesize: pagesize,
  };
}

async function createorganization(organization) {
  const newlyCreateOrganization = new mongoose.Organization(organization);
  return newlyCreateOrganization.save();
}

async function Updateorganization(id, fields) {
  const organization = await mongoose.Organization.findById(id).exec();
  Object.keys(fields).forEach((key) => {
    organization[key] = fields[key];
  });
  await organization.save();
  return organization;
}

async function deletebyid(id) {
  const response = await mongoose.Organization.findByIdAndDelete(id).exec();
  return response !== null;
}

module.exports = {
  getallorganization,
  getbyid,
  getbyid,
  getallorganization,
  Updateorganization,
  createorganization,
  deletebyid,
  validatetitle,
  validate,
};
