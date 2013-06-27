var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('disputes', function() {

    describe('.update', function() {
    
        it('should return a dispute object', function(done) {
        
            stripe.disputes.update(
                'ch_25UaFhSWR5VTQK',
                { evidence: 'Something fishy lies beneath.' },
                function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'dispute');
                    done();
                }
            );
        
        });
    
    });

});

