var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('coupons', function() {

    // coupon id to use in after creation
    var coupon_id = '';


    describe('.create', function() {

        it('should return a coupon object', function(done) {
        
            stripe.coupons.create(
                {
                    percent_off: 25,
                    duration: 'repeating',
                    duration_in_months: 3
                },
                function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('id');
                    coupon_id = response.id;
                    done();
                }
            );
        
        });
    
    });


    describe('.retrieve', function() {
    
        it('should return a coupon object', function(done) {
        
            stripe.coupons.retrieve(coupon_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('id');
                done();
            });
        
        });
    
    });


    describe('.del', function() {
    
        it('should return a deletion object', function(done) {
        
            stripe.coupons.del(coupon_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('deleted', true);
                done();
            });
        
        });
    
    });


    describe('.list', function() {
    
        it('should return a list of coupons', function(done) {
        
            stripe.coupons.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                done();
            });
        
        });
    
    });

});

