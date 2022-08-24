var maxSubArray = function(nums){
    // Track maximum sum and current sum with variables
    let maxSum = nums[0];
    let curSum = 0;
    // Iterate
    nums.forEach(n => {
        // Check if current sum is negative, if so start a new subarray by setting cursum=0
        if (curSum < 0) {
            curSum = 0}
        // Add current value to current sum
        curSum += n;
        // Compare current sum to max sum and set max sum to the higher of the two
        maxSum = Math.max(curSum, maxSum);
    })
    // Return the maxsum
    return maxSum;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums))

// Track maximum sum and current sum with variables
// Iterate
    // Check if current sum is negative, if so start a new subarray by setting cursum=0
    // Add current value to current sum
    // Compare current sum to max sum seen so far and set max sum to the higher of the two
// Return the maxsum