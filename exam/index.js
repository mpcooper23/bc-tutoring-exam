// Problem #1 //
function filterByOneStarReviews(array){
    
}

// Problem #2 //
function logItems(array){
    
}

// Problem #3 //
function getStrings(array){
    
}

// Problem #4 //
function getTotalByCategory(array, category, total=0){
    if (array.length === 0){
        return total;
    }
    if (array[0].category === category){
        total += array[0].quantity;
    }
    return getTotalByCategory(array.slice(1), category, total);
}

console.log(getTotalByCategory(cart, 'Grocery'));
