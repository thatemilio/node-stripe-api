var should = require('should');

module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


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

};

