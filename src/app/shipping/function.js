var stripe = Stripe('pk_test_51I3LYICuNO5Qp3PjeGqzOjFn6itRBM7n9prJE4CAPojrBx4pHgBGCZa2tFn8bHOMNTzOXGIftMAeQVqhKBGoGe8y00SR88YrC7');

export default function stripePayment(){
  fetch('/create-checkout-session', {
    method: 'POST',
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(session) {
    return stripe.redirectToCheckout({ 
      sessionId: session.id      
    });
  })
  .then(function(result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, you should display the localized error message to your
    // customer using `error.message`.
    if (result.error) {
      alert(result.error.message);
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
  
}