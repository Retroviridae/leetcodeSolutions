const threeSum = function(nums) {
    // Declare result array
    const result: number[][] = [];
    // Sort input array
    nums.sort((a,b) => a - b);
    // Iterate over intput
    for (let i = 0; i < nums.length; i++) {
        // If number is a duplicate, increment i again
        if (i > 0 && nums[i] === nums[i-1]) {
            // Continue ends current iteration, the for loop on line 7
            continue;
        }
        // Now do twoSum2
        // Declare left and right pointers at left and right bounds of input
        let left = i + 1,
            right = nums.length - 1;
            // Iterate
        while (left < right) {
            const curSum = nums[i] + nums[left] + nums[right];
            // If sum too small, increase left
            if (curSum < 0) left++;
            // If sum too big, decrease right
            else if (curSum > 0) right--;
            // If sum === 0, push numbers into resulte
            else {
                result.push([nums[i], nums[left], nums[right]]);
                // TwoSum2 would return here but 3Sum has multiple solutions so increment left
                left++;
                // Make sure l isn't a duplicate
                while (nums[left] === nums[left-1] && left < right) left++;
            }
        }
    }
    // Return result array of arrays
    return result;
};

// Sort array then basically do twoSum2
// Declare the result array
// Sort the input array
// Iterate over the input
    // If number is the same as the previous number, increment i with continue keyword
// Now do twoSum2
    // While l < r
    // If sum is too low, increment l
    // If sum is too high, decrement r
    // If sum === 0
        // Push combination into result 
        // Increment l until nums[l] is not the same as nums[l-1]
// Return the result array of arrays
// Input = [-1,0,1,2,-1,-4]
// Result [[-1,-1,2],[-1,0,1]]





// const threeSum = function(nums) {

//     const result: number[][] = [];

//     nums.sort((a,b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i-1]) {
//             continue;
//         }
//         let left = i + 1;
//         let right = nums.length - 1;
//         while (left < right) {
//             const curSum = nums[i] + nums[left] + nums[right];
//             if (curSum < 0) left++;
//             else if (curSum > 0) right--;
//             else {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 left++;
//                 while (nums[left] === nums[left-1] && left < right) left++;
//             }
//         }
//     }
//     return result;
// };