// Problem #1 //
/**
 * 
 *Create a function called filterByOneStarReviews that takes in one parameter - array -
 which represents an array of items like the one shown in data.js. This function should 
 use the native filter method to return a new array of only the items that have at least 
 1 one star review in their reviews array.
 */


function filterByOneStarReviews(array){
    return array.filter(product => {
        return product.reviews.filter(review =>
           { if(product.reviews >= '1'){
                   return true
    }})
    })
}

// Problem #2 //
/**
 * Create a function called logItems that takes in one parameter - array - 
 * which represents an array of items like the one shown in data.js. This 
 * function should use a for loop to iterate backwards through the input array, 
 * and at each iteration it should log the item and it's category in parenthesis 
 * if the price is below $10.
 * 
 */

function logItems(array){
    for (let i = array.length - 1; i > 0; i--){
        if (array[i].price < 10){
         console.log(array[i].item + ' ' + '(' + array[i].category + ')')
        }
    }
}

// Problem #3 //
/**
 * Create a function called `getStrings` that takes in one parameter - `array` - 
 * which represents an array of items like the one shown in data.js. This function 
 * should use the native map method to return a new array of strings where each string 
 * includes the item and the total cost. The total cost should reflect the unit price 
 * AND quantity of items bought.
 * 
 */
function getStrings(array){
    return array.map(product => {
        return `${product.item} - Total Cost: ${product.price}`
    })
}

// Problem #4 //
/**
 * Create a function called getTotalByCategory that takes in two parameters - array & category; 
 * array represents an array of items like the one shown in data.js; category represents a string 
 * of the item's category. This function should use recursion to return the total number of items 
 * in the cart matching that category. Note that the total should take into account the quantity of 
 * items bought.
 * 
 */
function getTotalByCategory(array, category){
   let sum = 0
    //base case
if (array.length === 0){
    return sum;
}
    //recursion
    if(array[0].category = category){
return sum + 1
    }
    getTotalByCategory(array.slice(1), category)
}

// Problem #5 //
/**
 * 
 * Create a function called mapReviews that takes in one parameter - array - 
 * which represents an array of items like the one shown in data.js. This 
 * function should use the native map method to return a new array of subarrays. 
 * The subarrays contained in the output array should contain the review text for 
 * each item's reviews. Use the example below for reference:
 */
function mapReviews(array){
    const output = [];
    return array.map(reviews => {
        for(let i = 0; i <= reviews.length - 1; i++){
            output.push(reviews.text)
        } 
        return output
    })
   
}

// Problem #6 //
/**
 * Create a function called logLastReview that takes in one parameter - item - 
 * which represents an individual item object. This function should access 
 * the last review for that item and log a string to the console that includes the number 
 * of stars, the text of the review and the username of the review author. Use the example 
 * below for reference.
 * 
 */
function logLastReview(item){
    for (let i = 0; i <= item.review.length; i++){
        if (item.review === item.review.length - 1){
            console.log(`${item.review.stars} star: ${item.review.text} (${item.review.author.username})`)
        }
    }
   }


// Problem #7 //
/**
 * Create a function called updateObjects - that takes in two parameters - array & update; 
 * array represents an array of items like the own shown in data.js; update represents an array 
 * with two items: the zero index represents a new key we want to each to each object; the one 
 * index represents the value that should be attached to that key. This function should iterate 
 * through the input array, and at each iteration it should add the update zero index as a new key 
 * and the update one index as the new value at that key for every object. The function should return 
 * the array at the end.
 * 
 */
function updateObjects(array, update, output = []){
    return array.reduce((acc, current) => {
update(acc[key] + current[value])
     return output}, 0)
   
}


