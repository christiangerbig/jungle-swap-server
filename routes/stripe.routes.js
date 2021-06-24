const router = require("express").Router();
const stripe = require("stripe")("sk_test_51IQBsPA6EAM4YnfDx9U5G148b6vEJ1WADAczlAfKeu3xwWctEifxXJZ1oZDQZg6IoGZ0ByG5dPECpKDXNJ8pZtMG00DJjMEVbK");

// Calculate price
const calculateOrderAmount = (price) => {
  return price * 100; // Comma correction
};

// Create PaymentIntent with order amount and currency
router.post(
  "/create-payment-intent", 
  async (req, res) => {
    const { price } = req.body;
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: calculateOrderAmount(price),
        currency: "eur"
      }
    );
    res.send({ clientSecret: paymentIntent.client_secret });
  }
);

module.exports = router;