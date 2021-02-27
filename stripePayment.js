const router = require('express').Router()
const express = require("express");
const stripe = require("stripe")("sk_test_51IDG6vGWpVzA8Bj4ptx9adz2uXnMdH4e3FXDkEPlSvgHwtu9CERtOwtoGgSAiu0522VVvP57xLD2ntKCp4DGLXZm00iOaPdMRe");
const uuid = require("uuid");

const app = express();

app.use(express.json());
//app.use(cors());

router.get("/stripe", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

router.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token, totalprice } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: totalprice * 100,
        currency: "GBP",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

module.exports = router