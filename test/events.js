var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('events', function() {

    describe('.retrieve', function() {
    
        it('should return an event object', function(done) {
        
            stripe.events.retrieve('evt_25UaSsPe5hC89u', function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'event');
                done();
            });
        
        });
    
    });


    describe('.list', function() {
    
        it('should return an object with a `data` property', function(done) {
        
            stripe.events.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.should.have.property('data');
                done();
            });
        
        });
    
    });

});

