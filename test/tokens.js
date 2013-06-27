var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('tokens', function() {

    // token_id will be used throughout tests
    var token_id = '';


    describe('.create', function() {
    
        it('should return the created token object', function(done) {
        
            stripe.tokens.create(
                {
                    card:
                    {
                        number:     4242424242424242,
                        exp_month:  12,
                        exp_year:   2015
                    }
                },
                function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'token');
                    response.should.have.property('id');
                    token_id = response.id;
                    done();
                }
            );
        
        });
    
    });


    describe('.retrieve', function() {
    
        it('should return a token object', function(done) {
        
            stripe.tokens.retrieve(token_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'token');
                done();
            });
        
        });
    
    });

});

