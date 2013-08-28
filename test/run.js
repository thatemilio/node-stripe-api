/*
 *
 * Assign your `Test Secret Key` to the
 * variable apiKey.
 *
 * https://manage.stripe.com/account/apikeys
 *
 */

var apiKey = '';



/*
 *
 * The test runner.
 *
 */

if (!apiKey) return console.log("You need to enter your 'Test Secret Key'.");


require('./units/account.js')(apiKey);
require('./units/balance.js')(apiKey);
require('./units/cards.js')(apiKey);
require('./units/charges.js')(apiKey);
require('./units/coupons.js')(apiKey);
require('./units/customers.js')(apiKey);
require('./units/discounts.js')(apiKey);
require('./units/disputes.js')(apiKey);
require('./units/events.js')(apiKey);
require('./units/invoice-items.js')(apiKey);
require('./units/invoices.js')(apiKey);
require('./units/plans.js')(apiKey);
require('./units/recipients.js')(apiKey);
require('./units/subscriptions.js')(apiKey);
require('./units/tokens.js')(apiKey);
require('./units/transfers.js')(apiKey);

