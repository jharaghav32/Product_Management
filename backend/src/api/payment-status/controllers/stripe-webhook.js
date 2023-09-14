// ./controllers/stripe-webhooks.js
"use strict";

module.exports = {
  async handleWebhook(ctx) {
    const { body, headers } = ctx.request;
    const event = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Handle different event types from Stripe (e.g., payment_intent.succeeded)
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      const stripeId = paymentIntent.id;

      // Update the PaymentStatus collection with the payment status
      try {
        await strapi.query("payment-status").update(
          { stripeid: stripeId },
          { status: true }
        );
      } catch (error) {
        console.error("Error updating payment status:", error);
      }
    } else if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object;
      const stripeId = paymentIntent.id;

      // Update the PaymentStatus collection with the payment status
      try {
        await strapi.query("payment-status").update(
          { stripeid: stripeId },
          { status: false }
        );
      } catch (error) {
        console.error("Error updating payment status:", error);
      }
    }

    ctx.send("Received");
  },
};
