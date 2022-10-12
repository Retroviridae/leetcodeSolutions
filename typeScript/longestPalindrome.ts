var longestPalindrome = function(s) {
    // Initialize counter and result variable
    let obj = {};
    let result = 0;
    // Iterate
    for(let i=0; i<s.length;i++){
        // Create the counter
        let c = s[i];
        obj[c] ||= 0;
        obj[c]++;
    }
    // Iterate over counter
    for(let key in obj){
        // Add even numbers to result and add odd numbers - 1
        result += Math.floor(obj[key] / 2 ) * 2
        // Check if a singular odd number can be placed in the center of the palindrome
        if (result % 2 === 0 && obj[key] % 2 === 1){
            // If it can, increment result
            result++
        }
    }
    // Return result
    return result
    
};

// Frequency counter hash map

// Initialize counter and result variable
// Iterate
    // Create the counter
// Iterate over counter
    // Add even numbers to result
    // Add odd numbers - 1
    // Check if a singular odd number can be placed in the center of the palindrome
    // If it can, increment result
// Return result







// Make frequency counter. If count is even, add count to result. If odd, subtract 1 and add count-1 to result. Add 1 if an odd count number can be placed in the middle of the palindrome.