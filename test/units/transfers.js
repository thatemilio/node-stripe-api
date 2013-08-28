var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('transfers', function() {

        // transfer_id will be used throughout tests
        var transfer_id = '';


        describe('.create', function() {
        
            it('should return a transfer object', function(done) {
            
                stripe.transfers.create(
                    {
                        amount: 400,
                        currency: 'usd',
                        recipient: 'self',
                        description: 'Test transfer to self.'
                    },
                    function(error, response) {
                        should.not.exist(error);
                        response.should.have.property('object', 'transfer');
                        transfer_id = response.id;
                        done();
                    }
                );
            
            });
        
        });


        describe('.retrieve', function() {
        
            it('should return a transfer object', function(done) {
            
                stripe.transfers.retrieve(transfer_id, function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'transfer');
                    done();
                });
            
            });
        
        });


        describe('.cancel', function() {
        
            it('should return a transfer object');
        
        });


        describe('.list', function() {
        
            it('should return a list of transfer objects', function(done) {
            
                stripe.transfers.list(function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'list');
                    response.should.have.property('data');
                    done();
                });
            
            });
        
        });

    });

};

