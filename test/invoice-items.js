var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('invoiceItems', function() {

    // invoiceItem_id to store for use throughout tests
    var invoiceItem_id = '';


    describe('.create', function() {
    
        it('should return an invoice item object', function(done) {
        
            stripe.invoiceItems.create(
            {
                customer: 'cus_25U9btpHdkthdp',
                amount: 1000,
                currency: 'usd',
                description: 'One-time setup fee'
            },
            function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'invoiceitem');
                invoiceItem_id = response.id;
                done();
            }
            );
        
        });
    
    });


    describe('.retrieve', function() {
    
        it('should return an invoice item object', function(done) {
        
            stripe.invoiceItems.retrieve(invoiceItem_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'invoiceitem');
                done();
            });
        
        });
    
    });


    describe('.update', function() {
    
        it('should return the updated invoice item object', function(done) {
        
            stripe.invoiceItems.update(invoiceItem_id, { amount: 1500 }, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'invoiceitem');
                response.should.have.property('amount', 1500);
                done();
            });
        
        });
    
    });


    describe('.del', function() {
    
        it('should return a deletion object', function(done) {
        
            stripe.invoiceItems.del(invoiceItem_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('deleted', true);
                done();
            });
        
        });
    
    });


    describe('.list', function() {
    
        it('should return a list of invoice items', function(done) {
        
            stripe.invoiceItems.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.should.have.property('data');
                done();
            });
        
        });
    
    });

});

