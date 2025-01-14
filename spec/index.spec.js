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

    describe("logItems()", function(){
        beforeEach(function () {
            sinon.spy(console, 'log');
          });
      
          afterEach(function () {
            console.log.restore();
          });
        it('should the correct items to the console', function(){
            const correct = [
                'Diet Sunkist (Grocery)',
                'Dr. Pepper Zero - 12 pack (Grocery)'
            ];
            logItems(cart);
            if (console.log.args.length === 0){
                assert.equal(console.log.args.length > 0, true);
            } else {
                console.log.args.forEach((item, index) => {
                    assert.equal(item[0], correct[index]);
                });
            }
        });
    });

    describe("getStrings()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', function(){
            const result = getStrings(cart);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = getStrings(cart);
            const correct = [
                'Roach traps - Total cost: 10.49', 
                'Dr. Pepper Zero - 12 pack - Total cost: 15.98', 
                'Diet Sunkist - Total cost: 17.98', 
                'Wireless Earbuds - Total cost: 39.99'
            ];
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', function(){
            const result = getStrings(cart);
            Array.prototype.map.called.should.be.true;
        });
    });

    describe("getTotalByCategory()", function(){
        it('should return a number', function(){
            assert.equal(typeof getTotalByCategory(cart, 'Grocery'), 'number');
        });
        it('should return a correct total for items based on the category', function(){
            const result = getTotalByCategory(cart, 'Grocery');
            assert.equal(result, 4);
        });
        it('should use recursion', function(){
            const func = sinon.spy(window, 'getTotalByCategory');
            try {
                func(cart, 'Grocery');
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });
    });


});