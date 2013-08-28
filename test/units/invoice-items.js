var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('invoiceItems', function() {

        // invoiceItem_id to store for use throughout tests
        var invoiceItem_id = '';


        describe('.create', function() {
        
            it('should return an invoice item object');
        
        });


        describe('.retrieve', function() {
        
            it('should return an invoice item object');
        
        });


        describe('.update', function() {
        
            it('should return the updated invoice item object');
        
        });


        describe('.del', function() {
        
            it('should return a deletion object');
        
        });


        describe('.list', function() {
        
            it('should return a list of invoice items', function(done) {
            
                stripe.invoiceItems.list(function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('object', 'list');
                    response.should.have.property('data');
                    done();
                });
            
            });
        
        });

    });

};

