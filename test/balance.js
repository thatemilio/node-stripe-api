var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 



describe('balance', function() {

    describe('.retrieve', function() {
    
        it('should return a balance object', function(done) {
            
            stripe.balance.retrieve(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'balance');
                done();
            });

        });
    
    });


    describe('.list', function() {
    
        it('should return a list of balances', function(done) {
        
            stripe.balance.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.should.have.property('data');
                done();
            });
        
        });
    
    });

});

