var should = require('should');


module.exports = function(apiKey) {

    var stripe = require('../../index.js')(apiKey); 


    describe('events', function() {

        describe('.retrieve', function() {
        
            it('should return an event object');
        
        });


        describe('.list', function() {
        
            it('should return an object with a `data` property');
        
        });

    });

};

