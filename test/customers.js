var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('customers', function() {

    // ID that was created and will be used throughout the tests.
    var customer_id = '';


    describe('.create', function() {
    
        it('should return a customer object', function(done) {
        
            stripe.customers.create(
                {
                    card:
                    {
                        number: 4242424242424242,
                        exp_month: 12,
                        exp_year: 15
                    },
                    description: 'Part of a node.js unit test.'
                },
                function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'customer');
                    customer_id = response.id;
                    done();
                }
            );
        
        });
    
    });


    describe('.retrieve', function() {
    
        it('should return a customer object', function(done) {
        
            stripe.customers.retrieve(customer_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'customer');
                done();
            });
        
        });
    
    });


    describe('.update', function() {
    
        it('should should return a customer object', function(done) {
        
            stripe.customers.update(customer_id, { description: 'Changing the desc.' }, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'customer');
                done();
            });
        
        });
    
    });


    describe('.del', function() {
    
        it('should return a deletion object', function(done) {
        
            stripe.customers.del(customer_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('deleted', true);
                done();
            });
        
        });
    
    });


    describe('.list', function() {
    
        it('should return a list of customer objects', function(done) {
        
            stripe.customers.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.should.have.property('data');
                done();
            });
        
        });
    
    });

});

