describe('BC Tutoring Exam', function(){

    describe("filterByOneStarReviews", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'filter');
        });
      
        afterEach(function () {
            Array.prototype.filter.restore();
        });
        it('should return an array', function(){
            const result = filterByOneStarReviews(cart);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = filterByOneStarReviews(cart);
            const correct = [cart[0], cart[1]];
            assert.deepEqual(result, correct);
        });
        it('should use the native filter method', function(){
            const result = filterByOneStarReviews(cart);
            Array.prototype.filter.called.should.be.true;
        });
    });


});