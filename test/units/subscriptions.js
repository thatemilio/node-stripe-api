var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('subscriptions', function() {

        describe('.update', function() {
        
            it('should return the newly created subscription object');
        
        });


        describe('.cancel', function() {
        
            it('should return the canceled subscription object');
        
        });

    });

};

