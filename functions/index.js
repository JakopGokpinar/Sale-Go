const functions = require("firebase-functions");
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51I3LYICuNO5Qp3PjgVB8YUqGHe7I929lWARQ1JJkzJP0rq0THtECBwSOBlDLH7oOLSfYOnDikd2ctgamB9eUqaPz00xzpqYwE6');
app.use(express.static(__dirname + '/dist/sale-app'));

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'], 
    submit_type: 'donate',  
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donate',
          },
          unit_amount: 500,      
        },
        quantity: 1,
      },
    ],
    billing_address_collection: 'required',
    mode: 'payment',
    success_url: 'http://salego.ml/order-success',
    cancel_url: 'https://salego.ml/order-fail',
  });

  res.json({ id: session.id });
});

//app.listen(4242, () => console.log(`Listening on port ${4242}!`));
exports.app = functions.https.onRequest(app);