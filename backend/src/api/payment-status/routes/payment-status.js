'use strict';

/**
 * payment-status router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
// ./api/payment-status/routes/payment-status.js
module.exports = [
    {
      method: "POST",
      path: "/stripe-webhooks",
      handler: "stripe-webhooks.handleWebhook",
      config: {
        policies: [], // Add any policies you want to apply to this webhook route
      },
    },
  ];
  
module.exports = createCoreRouter('api::payment-status.payment-status');
