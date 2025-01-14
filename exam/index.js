// Problem #1 //
function filterByOneStarReviews(array){
    
}

// Problem #2 //
function logItems(array){
    
}

// Problem #3 //
function getStrings(array){
    return array.map(item => {
        const cost = item.price * item.quantity;
        return `${item.item} - Total cost: ${cost}`;
    });
}

console.log(getStrings(cart));