# bc-tutoring-exam
1. Create a function called `filterByOneStarReviews` that takes in one parameter - `array` - which represents an array of items like the one shown in data.js. This function should use the native filter method to return a new array of only the items that have at least 1 one star review in their `reviews` array.
2. Create a function called `logItems` that takes in one parameter - `array` - which represents an array of items like the one shown in data.js. This function should use a for loop to iterate backwards through the input array, and at each iteration it should log the item and it's category in parenthesis if the price is below $10.
```javascript
// example output
logItems(cart);
/*
LOGS =>
Diet Sunkist (Grocery)
Dr. Pepper Zero - 12 pack (Grocery)
*/
```
3. Create a function called `getStrings` that takes in one parameter - `array` - which represents an array of items like the one shown in data.js. This function should use the native map method to return a new array of strings where each string includes the item and the total cost. The total cost should reflect the unit price AND quantity of items bought.
```javascript
// example output
getStrings(cart);
/*
RETURNS =>
[
    'Roach traps - Total cost: 10.49', 
    'Dr. Pepper Zero - 12 pack - Total cost: 15.98',
    'Diet Sunkist - Total cost: 17.98', 
    'Wireless Earbuds - Total cost: 39.99'
]
*/
```
4. Create a function called `getTotalByCategory` that takes in two parameters - `array` & `category`; `array` represents an array of items like the one shown in data.js; `category` represents a string of the item's category. This function should use recursion to return the total number of items in the cart matching that category. Note that the total should take into account the quantity of items bought.
5.  Create a function called `mapReviews` that takes in one parameter - `array` - which represents an array of items like the one shown in data.js. This function should use the native map method to return a new array of subarrays. The subarrays contained in the output array should contain the review text for each item's reviews. Use the example below for reference:
```javascript
// example output
mapReviews(cart);
/*
RETURNS =>
[
    ['These seem to work okay.', "These didn't work at all!"],
    ['Some of the cans were dented.', 'The package only had 11 cans.'],
    ['Really like this soda.', 'Soda was good, but box was damaged.'],
    ['Very comfortable.', 'Great sound quality for the price!']
]
*/
```
6. Create a function called `logLastReview` that takes in one parameter - `item` - which represents an array an individual item object. This function should access the last review for that item and log a string to the console that includes the number of stars, the text of the review and the username of the review author. Use the example below for reference.
```javascript
// example output
logLastReview({
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
    });
/*
LOGS => 1 star: These didn't work at all! (bjoseph)
*/
```