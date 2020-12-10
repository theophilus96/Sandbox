const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HwOCSFZHuOuFOVlTYTCI7LrxKt0jOaCUo8wr9aafdaUZlRr0kPES5sGsuePgjTXIOU2vqEMQrBhmphRBFz8gzKe00Qgwuyaaq"
);

//API
//APP config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API Routes
app.get("/", (req, res) => res.status(200).send("Hello World from theo"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received");
  console.log("total amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "sgd",
  });

  //OK - created
  response.status(201).send({
      clientSecret: paymentIntent.client_secret
  })
});
//Listen Command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/sandbox-d017b/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
