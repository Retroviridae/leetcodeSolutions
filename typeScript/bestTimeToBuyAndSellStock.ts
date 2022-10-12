var maxProfit = function(prices) {
    // Declare two left and right edges and result variable
    let l=0
    let r=0
    let maxProf=0
    // Iterate until right edge reaches the end
    while (r<prices.length){
        // If profitable, check if most profitable we've seen so far
        if (prices[l] < prices[r]){
            let profit = prices[r] - prices[l]
            maxProf = Math.max(maxProf,profit)
        // If not profitable, move left up to the new lowest price
        }else{
            l=r
        }
        // Increment right
        r++
    }
    return maxProf
};

// Two pointers/sliding window: tracking current(r) and lowest price(l)

// Declare two left and right edges and result variable 
// iterate until right edge reaches the end
// If profitable, check if most profitable we've seen so far
// IIf not profitable, move left up to r
// Increment right








