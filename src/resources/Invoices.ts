// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Invoices = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/invoices'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/invoices/{invoice}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/invoices/{invoice}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/invoices/{invoice}'}),
  attachPaymentIntent: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/attach_payment_intent',
  }),
  createPreview: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/create_preview',
  }),
  finalizeInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/finalize',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/lines',
    methodType: 'list',
  }),
  listPayments: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/payments',
    methodType: 'list',
  }),
  listUpcomingLines: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/upcoming/lines',
    methodType: 'list',
  }),
  markUncollectible: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
  }),
  pay: stripeMethod({method: 'POST', fullPath: '/v1/invoices/{invoice}/pay'}),
  retrievePayment: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/{invoice}/payments/{invoice_payment}',
  }),
  retrieveUpcoming: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/upcoming',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoices/search',
    methodType: 'search',
  }),
  sendInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/send',
  }),
  updateLineItem: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}',
  }),
  voidInvoice: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoices/{invoice}/void',
  }),
});
