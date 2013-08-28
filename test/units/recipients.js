var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('recipients', function() {

        // recipient_id is going to be used throughout tests
        var recipient_id = '';


        describe('.create', function() {
        
            it('should return a recipient object', function(done) {
            
                stripe.recipients.create(
                    {
                        name: 'John Doe',
                        type: 'individual'
                    },
                    function(error, response) {
                        should.not.exist(error);
                        response.should.have.property('object', 'recipient');
                        recipient_id = response.id;
                        done();
                    }
                );
            
            });
        
        });


        describe('.retrieve', function() {
        
            it('should return a recipient object', function(done) {
            
                stripe.recipients.retrieve(recipient_id, function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'recipient');
                    done();
                });
            
            });
        
        });


        describe('.update', function() {
        
            it('should return an updated recipient object', function(done) {
            
                stripe.recipients.update(recipient_id, { name: 'Jane Doe' }, function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('name', 'Jane Doe');
                    done();
                });
            
            });
        
        });


        describe('.del', function() {
        
            it('should return a deletion object', function(done) {
            
                stripe.recipients.del(recipient_id, function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('deleted', true);
                    done();
                });
            
            });
        
        });


        describe('.list', function() {
        
            it('should return a list of recipient objects', function(done) {
            
                stripe.recipients.list(function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'list');
                    response.should.have.property('data');
                    done();
                });
            
            });
        
        });

    });

};

