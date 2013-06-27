var should = require('should');
var stripe = require('../index')('sk_test_mkGsLqEW6SLnZa487HYfJVLf'); 


describe('plans', function() {

    // plan_id will be used throughout the tests
    var plan_id = '';


    describe('.create', function() {
    
        it('should return a plan object', function(done) {
        
            stripe.plans.create(
                {
                    amount: 2000,
                    interval: 'month',
                    name: 'Amazing Gold Plan',
                    currency: 'usd',
                    id: 'gold2000usd'
                },
                function(error, response) {
                    should.not.exist(error);
                    response.should.have.property('name', 'Amazing Gold Plan');
                    plan_id = response.id;
                    done();
                }
            );
        
        });
    
    });


    describe('.retrieve', function() {
    
        it('should return a plan object', function(done) {
        
            stripe.plans.retrieve(plan_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'plan');
                done();
            });
        
        });
    
    });


    describe('.update', function() {
    
        it('should return the updated plan object', function(done) {
        
            stripe.plans.update(plan_id, { name: 'New plan name' }, function(error, response) {
                should.not.exist(error);
                response.should.have.property('name', 'New plan name');
                done();
            });
        
        });
    
    });


    describe('.del', function() {
    
        it('should return a deletion object', function(done) {
        
            stripe.plans.del(plan_id, function(error, response) {
                should.not.exist(error);
                response.should.have.property('deleted', true);
                done();
            });
        
        });
    
    });


    describe('.list', function() {
    
        it('should return a list of plan objects', function(done) {
        
            stripe.plans.list(function(error, response) {
                should.not.exist(error);
                response.should.have.property('object', 'list');
                response.should.have.property('data');
                done();
            });
        
        });
    
    });

});

