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

router.get("/restrictions/:userId", (req, res) => {
  const { userId } = req.params;
  userService
    .getUserRestrictions(userId)
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
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

router.get("/shipmentState/:shipmentId", (req, res) => {
  const { shipmentId } = req.params;
  userService
    .getShipment(shipmentId)
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
});

router.get("/paymentState/:transactionId", (req, res) => {
  const { transactionId } = req.params;
  userService
    .getPayment(transactionId)
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(400));
});

module.exports = router;
