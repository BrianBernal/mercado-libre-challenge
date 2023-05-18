const express = require("express");
const MercadolibreService = require("../../controllers/MercadolibreService");
const router = express.Router();

const userService = new MercadolibreService();

router.get("/user", (_req, res) => {
  userService
    .getUser()
    .then((user) => {
      return res.send(user);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
});

router.get("/purchases", (req, res) => {
  const { userId, ...rest } = req.query;
  const limit = Number(rest.limit) || undefined;
  const page = Number(rest.page) || undefined;

  userService
    .getUserPurchases(userId, limit, page)
    .then((purchases) => {
      return res.send(purchases);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
});

module.exports = router;
