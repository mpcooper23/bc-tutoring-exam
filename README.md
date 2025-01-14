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
5. 