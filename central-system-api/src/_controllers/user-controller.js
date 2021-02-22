const { Router } = require("express");
const router = Router();
const {
  Getallusers,
  CreateUser,
  UpdateUser,
  Deleteuserbyid,
  Getuserbyid,
} = require("../_services/user-services.js");

const isInt = (text) => !isNaN(parseInt(text));

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page || 0);
  const pagesize = parseInt(req.query.pagesize || 10);

  const serviceData = {
    username: req.query.username,
  };
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

  const users = await Getallusers(serviceData);
  res.status(200).json(users);
});

router.get("/:id", async (req, res) => {
  const userbyid = await Getuserbyid(req.params.id);
  res.status(200).json(userbyid);
});

router.post("/", async (req, res) => {
  const value = req.body;
  const user = await CreateUser(value);
  res.status(201).json(user);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await UpdateUser(id, req.body);
  res.status(201).json(user);
});

router.delete("/:id", async (req, res) => {
  const removed = await Deleteuserbyid(req.params.id);
  if (removed) {
    res.status(204).end();
  } else {
    res.status(304).end();
  }
});

module.exports = router;
