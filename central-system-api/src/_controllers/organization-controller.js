const { Router } = require("express");
const router = Router();

const {
  getallorganization,
  getbyid,
  Updateorganization,
  createorganization,
  deletebyid,
  validatetitle,
  validate,
} = require("../_services/organization-services");

const isInt = (text) => !isNaN(parseInt(text));

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page || 0);
  const pagesize = parseInt(req.query.pagesize || 10);
  const name = req.query.name;
  const legalentity = req.query.legalentity;
  const serviceData = {};
  if (!isInt(page) || page < 0) {
    res
      .status(400)
      .json({ messsage: "la página no debe ser un número no negativo" });
    return;
  }
  serviceData.page = page;

  if (!isInt(pagesize) || page < 0) {
    res
      .status(400)
      .json({
        messsage: "el tamaño de página no debe ser un número no negativo",
      });
    return;
  }
  serviceData.pagesize = pagesize;
  if (name) {
    const { error, value } = validatetitle(name);
    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    serviceData.name = name;
  }

  if (legalentity) {
    const { error, value } = validatetitle(legalentity);
    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    serviceData.legalentity = legalentity;
  }
  const organization = await getallorganization(serviceData);
  res.status(200).json(organization);
});

router.get("/:id", async (req, res) => {
  const organizationbyid = await getbyid(req.params.id);
  
  res.status(200).json(organizationbyid);
});

router.post("/", async (req, res) => {
  const organization = await createorganization(req.body);
  res.status(201).json(organization);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const organization = await Updateorganization(id, req.body);
  res.status(201).json(organization);
});

router.delete("/:id", async (req, res) => {
  const removed = await deletebyid(req.params.id);
  if (removed) {
    res.status(204).end();
  } else {
    res.status(304).end();
  }
});

module.exports = router;
