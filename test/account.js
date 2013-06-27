var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('account', function() {

    describe('.retrieve', function() {

        it('should return an account object', function(done) {
            stripe.account.retrieve(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'account');
                done();
            });
        });

    });

});

