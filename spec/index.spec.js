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

    describe("mapReviews()", function(){
        beforeEach(function () {
            sinon.spy(Array.prototype, 'map');
        });
      
        afterEach(function () {
            Array.prototype.map.restore();
        });
        it('should return an array', function(){
            const result = mapReviews(cart);
            assert.equal(Array.isArray(result), true);
        });
        it('should return a correct array of objects', function(){
            const result = mapReviews(cart);
            const correct = [
                ['These seem to work okay.', "These didn't work at all!"],
                ['Some of the cans were dented.', 'The package only had 11 cans.'],
                ['Really like this soda.', 'Soda was good, but box was damaged.'],
                ['Very comfortable.', 'Great sound quality for the price!']
            ];
            assert.deepEqual(result, correct);
        });
        it('should use the native map method', function(){
            const result = mapReviews(cart);
            Array.prototype.map.called.should.be.true;
        });
    });

    describe("logLastReview()", function(){
        it('should return a string', function(){
            const result = logLastReview(cart[0]);
            assert.equal(typeof result, 'string')
        });
        it('should a correct string of the last review', function(){
            const result = logLastReview(cart[0]);
            const correct = "1 star: These didn't work at all! (bjoseph)";
            assert.equal(result, correct);
        });
    });

    describe("updateObjects", function(){
        const sandbox = sinon.createSandbox();
        beforeEach(function () {
            sandbox.data = [
                {
                    item: 'Roach traps',
                    quantity: 1,
                    price: 10.49,
                    category: 'Household Supplies',
                    reviews: [
                        {
                            stars: '4',
                            text: 'These seem to work okay.',
                            author: {
                                username: 'aimee34',
                                numberOfReviews: 50,
                            }
                        },
                        {
                            stars: '1',
                            text: "These didn't work at all!",
                            author: {
                                username: 'bjoseph',
                                numberOfReviews: 8,
                            }
                        }
                    ]
                },
                {
                    item: 'Dr. Pepper Zero - 12 pack',
                    quantity: 2,
                    price: 7.99,
                    category: 'Grocery',
                    reviews: [
                        {
                            stars: '1',
                            text: 'Some of the cans were dented.',
                            author: {
                                username: 'sray',
                                numberOfReviews: 12
                            }
                        },
                        {
                            stars: '2',
                            text: 'The package only had 11 cans.',
                            author: {
                                username: 'kbradley',
                                numberOfReviews: 3
                            }
                        }
                    ]
            
                },
                {
                    item: 'Diet Sunkist',
                    quantity: 2,
                    price: 8.99,
                    category: 'Grocery',
                    reviews: [
                        {
                            stars: '5',
                            text: 'Really like this soda.',
                            author: {
                                username: 'stephcoop',
                                numberOfReviews: 25
                            }
                        },
                        {
                            stars: '3.5',
                            text: 'Soda was good, but box was damaged.',
                            author: {
                                username: 'bignick',
                                numberOfReviews: 15
                            }
                        }
                    ]
                },
                {
                    item: 'Wireless Earbuds',
                    quantity: 1,
                    price: 39.99,
                    category: 'Electronics',
                    reviews: [
                        {
                            stars: 5,
                            text: 'Very comfortable.',
                            author: {
                                username: 'ncoen',
                                numberOfReviews: 1
                            }
                        },
                        {
                            stars: 5,
                            text: 'Great sound quality for the price!',
                            author: {
                                username: 'scoop',
                                numberOfReviews: 25
                            }
                        }
                    ]
                }
            ]
        });
      
        afterEach(function () {
            sandbox.restore();
        });
        it('should return an array', function(){
            const result = updateObjects(sandbox.data, ['returned', false]);
            assert.equal(Array.isArray(result), true);
        });
        it('should return an array with each object correctly updated', function(){
            const result = updateObjects(sandbox.data, ['returned', false]);
            const correct = [
                {
                    item: 'Roach traps',
                    quantity: 1,
                    price: 10.49,
                    category: 'Household Supplies',
                    returned: false,
                    reviews: [
                        {
                            stars: '4',
                            text: 'These seem to work okay.',
                            author: {
                                username: 'aimee34',
                                numberOfReviews: 50,
                            }
                        },
                        {
                            stars: '1',
                            text: "These didn't work at all!",
                            author: {
                                username: 'bjoseph',
                                numberOfReviews: 8,
                            }
                        }
                    ]
                },
                {
                    item: 'Dr. Pepper Zero - 12 pack',
                    quantity: 2,
                    price: 7.99,
                    category: 'Grocery',
                    returned: false,
                    reviews: [
                        {
                            stars: '1',
                            text: 'Some of the cans were dented.',
                            author: {
                                username: 'sray',
                                numberOfReviews: 12
                            }
                        },
                        {
                            stars: '2',
                            text: 'The package only had 11 cans.',
                            author: {
                                username: 'kbradley',
                                numberOfReviews: 3
                            }
                        }
                    ]
            
                },
                {
                    item: 'Diet Sunkist',
                    quantity: 2,
                    price: 8.99,
                    category: 'Grocery',
                    returned: false,
                    reviews: [
                        {
                            stars: '5',
                            text: 'Really like this soda.',
                            author: {
                                username: 'stephcoop',
                                numberOfReviews: 25
                            }
                        },
                        {
                            stars: '3.5',
                            text: 'Soda was good, but box was damaged.',
                            author: {
                                username: 'bignick',
                                numberOfReviews: 15
                            }
                        }
                    ]
                },
                {
                    item: 'Wireless Earbuds',
                    quantity: 1,
                    price: 39.99,
                    category: 'Electronics',
                    returned: false,
                    reviews: [
                        {
                            stars: 5,
                            text: 'Very comfortable.',
                            author: {
                                username: 'ncoen',
                                numberOfReviews: 1
                            }
                        },
                        {
                            stars: 5,
                            text: 'Great sound quality for the price!',
                            author: {
                                username: 'scoop',
                                numberOfReviews: 25
                            }
                        }
                    ]
                }
            ]
            assert.deepEqual(result, correct);
        });
    });
});