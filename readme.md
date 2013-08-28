## node-stripe-api

[node.js](http://nodejs.org) wrapper for the [Stripe API](https://stripe.com/docs/api).


### install

    npm install stripe-api


### usage

```javascript
var stripe = require('stripe-api')(<your_stripe_api_key>);
stripe.<api_group>.<api_group_command>([arguments,] callback);
```

### examples

[http://emiliote.github.io/node-stripe-api/](http://emiliote.github.io/node-stripe-api/)


### api

The `data` argument is a javascript object with key/value pairs that match what's expected by the [Stripe API](https://stripe.com/docs/api).


##### [charges](https://stripe.com/docs/api#charges)

* `create(data, cb)`
* `retrieve(charge_id, cb)`
* `refund(charge_id, [data,] cb)`
* `capture(charge_id, [data,] cb)`
* `list([data,] cb)`


##### [customers](https://stripe.com/docs/api#customers)

* `create(data, cb)`
* `retrieve(customer_id, cb)`
* `update(customer_id, data, cb)`
* `del(customer_id, cb)`
* `list([data,] cb)`


##### [cards](https://stripe.com/docs/api#cards)

* `create(customer_id, data, cb)`
* `retrieve(customer_id, card_id, cb)`
* `update(customer_id, card_id, data, cb)`
* `del(customer_id, card_id, cb)`
* `list(customer_id, [data,] cb)`


##### [subscriptions](https://stripe.com/docs/api#subscriptions)

* `update(customer_id, data, cb)`
* `cancel(customer_id, [data,] cb)`


##### [plans](https://stripe.com/docs/api#plans)

* `create(data, cb)`
* `retrieve(plan_id, cb)`
* `update(plan_id, data, cb)`
* `del(plan_id, cb)`
* `list([data,] cb)`


##### [coupons](https://stripe.com/docs/api#coupons)

* `create(data, cb)`
* `retrieve(coupon_id, cb)`
* `del(coupon_id, cb)`
* `list([data,] cb)`


##### [discounts](https://stripe.com/docs/api#discounts)

* `del(customer_id, cb)`


##### [invoices](https://stripe.com/docs/api#invoices)

* `retrieve(invoice_id, cb)`
* `retrieveLineItems(invoice_id, [data,] cb)`
* `create(customer_id, cb)`
* `pay(invoice_id, cb)`
* `update(invoice_id, data, cb)`
* `list([data,] cb)`
* `retrieveUpcoming(customer_id, cb)`


##### [invoiceItems](https://stripe.com/docs/api#invoiceitems)

* `create(data, cb)`
* `retrieve(invoiceItem_id, cb)`
* `update(invoiceItem_id, data, cb)`
* `del(invoiceItem_id, cb)`
* `list([data,] cb)`


##### [disputes](https://stripe.com/docs/api#disputes)

* `update(charge_id, data, cb)`


##### [transfers](https://stripe.com/docs/api#transfers)

* `create(data, cb)`
* `retrieve(transfer_id, cb)`
* `cancel(transfer_id, cb)`
* `list([data,] cb)`


##### [recipients](https://stripe.com/docs/api#recipients)

* `create(data, cb)`
* `retrieve(recipient_id, cb)`
* `update(recipient_id, data, cb)`
* `del(recipient_id, cb)`
* `list([data,] cb)`


##### [account](https://stripe.com/docs/api#account)

* `retrieve(cb)`


##### [balance](https://stripe.com/docs/api#balance)

* `retrieve(cb)`
* `list([data,] cb)`


##### [events](https://stripe.com/docs/api#events)

* `retrieve(event_id, cb)`
* `list([data,] cb)`


##### [tokens](https://stripe.com/docs/api#tokens)

* `create(data, cb)`
* `retrieve(token_id, cb)`



### test

Install the development modules.
`npm install`

Open `./tests/run.js` and paste in your [Test Secret Key](https://manage.stripe.com/account/apikeys).

Run the tests.
`mocha`

