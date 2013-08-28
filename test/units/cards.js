var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('cards', function() {

        describe('.create', function() {
        
            it('should return the card object');
        
        });



        describe('.retrieve', function() {
        
            it('should return the card object');
        
        });



        describe('.update', function() {
        
            it('should return the card object');
        
        });



        describe('.del', function() {
        
            it('should return a deletion object');
        
        });



        describe('.list', function() {
        
            it("should return a list of the customer's stored credit cards");
        
        });

    });

};

