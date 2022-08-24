var lengthOfLongestSubstring = function(s) {
    // Declare hash map, current sum, and max sum
    let obj = {};
    let curSum = 0;
    let maxSum = 0;
    // Iterate
    for(let i = 0; i < s.length; i++){
        let c = s[i];
        // If the character is in the hash, move i to the value
        if(c in obj){
            i = obj[c]
            obj = {};
            curSum = 0;
        // If not in the object, save it as key with index as value
        }else{
            obj[c]=i;
            curSum ++
        }
        // If cursum is higher than max, update max
        maxSum = Math.max(curSum, maxSum);
    }
    // Return maxsum
    return maxSum;
};

// Hash map with index keys

// Declare hash map, current sum, and max sum
// Iterate
    // If the character is in the hash, move i to the value
    // Reset the object and current sum
    // If not in the object, save it as key with index as value
    // If cursum is higher than max, update max
// Return maxsum