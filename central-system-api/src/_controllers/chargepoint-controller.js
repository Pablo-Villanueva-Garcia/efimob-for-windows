const { Router } = require("express");
const router = Router();

const {
  getbyid,
  getallidentify,
  Updateidentify,
  createidentify,
  deletebyid,
  validatetitle,
  validate,
} = require("../_services/chargepoint-services");

const isInt = (text) => !isNaN(parseInt(text));

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page || 0);
  const pagesize = parseInt(req.query.pagesize || 10);
  const identify = req.query.identify;
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
  if (identify) {
    const { error, value } = validatetitle(identify);
    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }
    serviceData.identify = identify;
  }

  const chargetpoint = await getallidentify(serviceData);
  res.status(200).json(chargetpoint);
});

router.get("/:id", async (req, res) => {
  const identifybyid = await getbyid(req.params.id);
  res.status(200).json(identifybyid);
});

router.post("/", async (req, res) => {
  const identify = await createidentify(req.body);
  res.status(201).json(identify);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const identify = await Updateidentify(id, req.body);
  res.status(201).json(identify);
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
