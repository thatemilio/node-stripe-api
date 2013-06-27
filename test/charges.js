var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('charges', function() {

    //
    // We're going to use this token after we create for the other functions.
    var token = '';


    describe('.create', function() {
    
        it('should return a charge object', function(done) {
        
            stripe.charges.create(
                {
                    amount: 400,
                    currency: 'usd',
                    card: {
                        number: '4242424242424242',
                        exp_month: '12',
                        exp_year: '15'
                    },
                    description: 'Charge for test@example.com',
                    capture: false
                },
                function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'charge');
                    token = response.id;
                    done();
                }
            );

        });
    
    });


    describe('.retrieve', function() {
    
        it('should return a charge object', function(done) {
        
            stripe.charges.retrieve(token, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'charge');
                done();
            });
        
        });
    
    });


    describe('.capture', function() {
    
        it('should return a captured object', function(done) {
        
            stripe.charges.capture(token, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'charge');
                done();
            });
        
        });
    
    });


    describe('.refund', function() {
    
        it('should return a refunded object', function(done) {
        
            stripe.charges.refund(token, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'charge');
                done();
            });
        
        });
    
    });


    describe('.list', function() {
    
        it('should return a list of charge objects', function(done) {
        
            stripe.charges.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.should.have.property('data');
                done();
            });
        
        });


        it('should return one charge when `count` is 1', function(done) {
        
            stripe.charges.list({ count: 1 }, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.data.should.have.length(1);
                done();
            });
        
        });
    
    });

});

