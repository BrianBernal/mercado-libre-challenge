const express = require("express");
const MercadolibreService = require("../../controllers/MercadolibreService");
const router = express.Router();

const userService = new MercadolibreService();

router.get("/user", (_req, res) => {
  userService
    .getUser()
    .then((user) => res.send(user))
    .catch((error) => res.status(400).send(error));
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
    .then((purchases) => res.send(purchases))
    .catch((error) => res.status(400).send(error));
});

router.get("/entirePurchases", async (req, res) => {
  try {
    const { userId, ...rest } = req.query;
    const limit = Number(rest.limit) || undefined;
    const page = Number(rest.page) || undefined;

    const userPurchases = await userService.getUserPurchases(
      userId,
      limit,
      page
    );

    const completeUserPurchases = await Promise.all(
      userPurchases.data.map(async (purchase) => {
        const { shipment_id, transaction_id, ...restPurchase } = purchase;
        const [transaction, payment] = await Promise.all([
          userService.getShipment(purchase.shipment_id),
          userService.getPayment(purchase.transaction_id),
        ]);
        return {
          ...restPurchase,
          transaction,
          payment,
        };
      })
    );

    return res.send({ ...userPurchases, data: completeUserPurchases });
  } catch (error) {
    return res.status(400).send(error);
  }
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
