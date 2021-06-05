const router = require("express").Router();
const stripe = require("stripe")("sk_test_51IQBsPA6EAM4YnfDx9U5G148b6vEJ1WADAczlAfKeu3xwWctEifxXJZ1oZDQZg6IoGZ0ByG5dPECpKDXNJ8pZtMG00DJjMEVbK");

const calculateOrderAmount = (items) => {
  return items * 100;
};

router.post(
  "/create-payment-intent", 
  async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: calculateOrderAmount(items),
        currency: "eur"
      }
    );
    res.send(
      {
        clientSecret: paymentIntent.client_secret
      }
    );
  }
);

module.exports = router;