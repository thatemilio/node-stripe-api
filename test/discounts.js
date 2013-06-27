var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('discounts', function() {

    describe('.del', function() {
    
        it('should return a deletion object', function(done) {
        
            stripe.discounts.del('cus_25U9btpHdkthdp', function(error, response) {
                should.not.exist(error);
                response.should.have.property('deleted', true);
                done();
            });
        
        });
    
    });

});

