var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('invoices', function() {

        describe('.retrieve', function() {
        
            it('should return an invoice object');
        
        });


        describe('.retrieveLineItems', function() {
        
            it('should return a list of line item objects');
        
        });


        describe('.create', function() {
        
            it('should return the invoice object');
        
        });


        describe('.pay', function() {
        
            it('should return the invoice object');
        
        });


        describe('.update', function() {
        
            it('should return the invoice object');
        
        });


        describe('.list', function() {
        
            it('should return a list of invoice objects');
        
        });


        describe('.retrieveUpcoming', function() {
        
            it('should return an invoice');
        
        });

    });

};

