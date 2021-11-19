const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51IQBsPA6EAM4YnfDx9U5G148b6vEJ1WADAczlAfKeu3xwWctEifxXJZ1oZDQZg6IoGZ0ByG5dPECpKDXNJ8pZtMG00DJjMEVbK"
);

// Calculate price
const calculateOrderAmount = (price) => price * 100; // Comma correction

// Create payment intent with order amount and currency
router.post("/stripe/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(price),
    currency: "eur",
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;
