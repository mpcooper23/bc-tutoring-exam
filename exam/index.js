// Problem #1 //
function filterByOneStarReviews(array){
    return array.filter(item => {
        for (let i = 0; i < item.reviews.length; i++){
            if (item.reviews[i].stars === '1'){
                return true;
            }
        }
    });
}

