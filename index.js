/*!
 * node-stripe-api
 *
 * https://github.com/emilioTe/node-stripe-api
 *
*/



var request = require('request');
var querystring = require('querystring');



module.exports = function(api_key) {

    var stripeURI = require('url').format({
        protocol: 'https',
        hostname: 'api.stripe.com',
        pathname: 'v1'
    });



    function _request(method, uri, data, cb) {

        var argLen = arguments.length;


        if ( argLen === 4 ) {

            request( stripeURI + uri,
            { 
                auth: { username: api_key },
                form: data,
                method: method
            },
            function(error, response, body) {
                if (error) return cb(error);

                var json = JSON.parse(body);

                if (json.error) return cb(json);

                return cb(null, json);
            });

        }
        
        else if ( argLen === 3 ) {

            request( stripeURI + uri,
            {
                auth: { username: api_key },
                method: method
            },
            function(error, response, body) {
                var cb = data;
                
                if (error) return cb(error);

                var json = JSON.parse(body);

                if (json.error) return cb(json);

                return cb(null, json);
            });

        }

    }


    //
    // -------------------------------------------
    // This is the beginning of the API functions.
    //


    return {
    
        //
        // -------------------------------------------
        // Account API
        //
        account: {

            retrieve: function(cb) {
                _request('get', '/account', cb);
            }

        },



        //
        // -------------------------------------------
        // Balance API
        //
        balance: {

            retrieve: function(cb) {
                _request('get', '/balance', cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {

                    var query = querystring.stringify(data);
                    _request('get', '/balance/history?' + query, cb);

                } else {
                    
                    var cb = data;
                    _request('get', '/balance/history', cb);

                }
            }

        },



        //
        // -------------------------------------------
        // Cards API
        //
        cards: {

            create: function(customer_id, data, cb) {
                _request('post', '/customers/' + customer_id + '/cards', data, cb);
            },


            retrieve: function(customer_id, card_id, cb) {
                _request('get', '/customers/' + customer_id + '/cards/' + card_id, cb);
            },


            update: function(customer_id, card_id, data, cb) {
                _request('post', '/customers/' + customer_id + '/cards/' + card_id, data, cb);
            },


            del: function(customer_id, card_id, cb) {
                _request('delete', '/customers/' + customer_id + '/cards/' + card_id, cb);
            },


            list: function(customer_id, data, cb) {
                if ( arguments.length === 3 ) {

                    var query = querystring.stringify(data);
                    _request('get', '/customers/' + customer_id + '/cards?' + query, cb);

                } else {
                    
                    var cb = data;
                    _request('get', '/customers/' + customer_id + '/cards', cb);

                }
            }

        },



        //
        // -------------------------------------------
        // Charges API
        //
        charges: {

            create: function(data, cb) {
                _request('post', '/charges', data, cb);
            },


            retrieve: function(charge_id, cb) {
                _request('get', '/charges/' + charge_id, cb);
            },


            refund: function(charge_id, data, cb) {
                if ( arguments.length === 3 ) {

                    _request('post', '/charges/' + charge_id + '/refund', data, cb);

                } else {

                    var cb = data;
                    _request('post', '/charges/' + charge_id + '/refund', cb);

                }
            },


            capture: function(charge_id, data, cb) {
                if ( arguments.length === 3 ) {

                    _request('post', '/charges/' + charge_id + '/capture', data, cb);

                } else {

                    var cb = data;
                    _request('post', '/charges/' + charge_id + '/capture', cb);

                }
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {

                    var query = querystring.stringify(data);
                    _request('get', '/charges?' + query, cb);

                } else {

                    var cb = data;
                    _request('get', '/charges', cb);

                }
            }

        },



        //
        // -------------------------------------------
        // Coupons API
        //
        coupons: {

            create: function(data, cb) {
                _request('post', '/coupons', data, cb);
            },


            retrieve: function(coupon_id, cb) {
                _request('get', '/coupons/' + coupon_id, cb);
            },


            del: function(coupon_id, cb) {
                _request('delete', '/coupons/' + coupon_id, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    _request('get', '/coupons', data, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/coupons', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Customers API
        //
        customers: {

            create: function(data, cb) {
                _request('post', '/customers', data, cb);
            },


            retrieve: function(customer_id, cb) {
                _request('get', '/customers/' + customer_id, cb);
            },


            update: function(customer_id, data, cb) {
                _request('post', '/customers/' + customer_id, data, cb);
            },


            del: function(customer_id, cb) {
                _request('delete', '/customers/' + customer_id, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/customers?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/customers', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Discounts API
        //
        discounts: {

            del: function(customer_id, cb) {
                _request('delete', '/customers/' + customer_id + '/discount', cb);
            }

        },



        //
        // -------------------------------------------
        // Disputes API
        //
        disputes: {

            update: function(charge_id, data, cb) {
                _request('post', '/charges/' + charge_id + '/dispute', data, cb);
            }

        },



        //
        // -------------------------------------------
        // Events API
        //
        events: {

            retrieve: function(event_id, cb) {
                _request('get', '/events/' + event_id, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/events?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/events', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Invoice Items API
        //
        invoiceItems: {

            create: function(data, cb) {
                _request('post', '/invoiceitems', data, cb);
            },


            retrieve: function(invoiceItem_id, cb) {
                _request('get', '/invoiceitems/' + invoiceItem_id, cb);
            },


            update: function(invoiceItem_id, data, cb) {
                _request('post', '/invoiceitems/' + invoiceItem_id, data, cb);
            },


            del: function(invoiceItem_id, cb) {
                _request('delete', '/invoiceitems/' + invoiceItem_id, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/invoiceitems?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/invoiceitems', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Invoices API
        //
        invoices: {

            retrieve: function(invoice_id, cb) {
                _request('get', '/invoices/' + invoice_id, cb);
            },


            retrieveLineItems: function(invoice_id, data, cb) {
                if ( arguments.length === 3 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/invoices/' + invoice_id + '/lines?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/invoices/' + invoice_id + '/lines', cb);
                
                }
            },


            create: function(customer_id, cb) {
                _request('post', '/invoices', { customer: customer_id }, cb);
            },


            pay: function(invoice_id, cb) {
                _request('post', '/invoices/' + invoice_id + '/pay', cb);
            },


            update: function(invoice_id, data, cb) {
                _request('post', '/invoices/' + invoice_id, data, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/invoices?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/invoices', cb);
                
                }
            },


            retrieveUpcoming: function(customer_id, cb) {
                var query = querystring.stringify({ customer: customer_id });
                _request('get', '/invoices/upcoming?' + query, cb);
            }

        },



        //
        // -------------------------------------------
        // Plans API
        //
        plans: {

            create: function(data, cb) {
                _request('post', '/plans', data, cb);
            },


            retrieve: function(plan_id, cb) {
                _request('get', '/plans/' + plan_id, cb);
            },


            update: function(plan_id, data, cb) {
                _request('post', '/plans/' + plan_id, data, cb);
            },


            del: function(plan_id, cb) {
                _request('delete', '/plans/' + plan_id, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/plans?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/plans', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Recipients API
        //
        recipients: {

            create: function(data, cb) {
                _request('post', '/recipients', data, cb);
            },


            retrieve: function(recipient_id, cb) {
                _request('get', '/recipients/' + recipient_id, cb);
            },


            update: function(recipient_id, data, cb) {
                _request('post', '/recipients/' + recipient_id, data, cb);
            },


            del: function(recipient_id, cb) {
                _request('delete', '/recipients/' + recipient_id, cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/recipients?' + query, cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/recipients', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Subscriptions API
        //
        subscriptions: {

            update: function(customer_id, data, cb) {
                _request('post', '/customers/' + customer_id + '/subscription', data, cb);
            },


            cancel: function(customer_id, data, cb) {
                if ( arguments.length === 3 ) {
                
                    _request('delete', '/customers/' + customer_id + '/subscription', data, cb);
                
                } else {
                
                    var cb = data;
                    _request('delete', '/customers/' + customer_id + '/subscription', cb);
                
                }
            }

        },



        //
        // -------------------------------------------
        // Tokens API
        //
        tokens: {

            create: function(data, cb) {
                _request('post', '/tokens', data, cb);
            },


            retrieve: function(token_id, cb) {
                _request('get', '/tokens/' + token_id, cb);
            }

        },



        //
        // -------------------------------------------
        // Transfers API
        //
        transfers: {

            create: function(data, cb) {
                _request('post', '/transfers', data, cb);
            },


            retrieve: function(transfer_id, cb) {
                _request('get', '/transfers/' + transfer_id, cb);
            },


            cancel: function(transfer_id, cb) {
                _request('post', '/transfers/' + transfer_id + '/cancel', cb);
            },


            list: function(data, cb) {
                if ( arguments.length === 2 ) {
                
                    var query = querystring.stringify(data);
                    _request('get', '/transfers?' + query,  cb);
                
                } else {
                
                    var cb = data;
                    _request('get', '/transfers', cb);
                
                }
            }

        }
    
    };  // end of return

};

