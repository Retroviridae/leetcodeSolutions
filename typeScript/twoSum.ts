const twoSum = function(nums, target) {
    // Initialize object with previous values as keys, and indexes as values
    let previous = {};  
    // Iterate over input
    for (let i=0; i < nums.length; i++){
        let difference = target-nums[i];
        // If target - nums[i] is in the object: return [i, obj[difference] ]
        if (difference in previous) {
            return [previous[difference],i];
        }
        // Else add nums[i]:i to obj
        else{
            previous[nums[i]] = i;
        }
    }
    // If loop finishes, return false
    return false
};



// Initialize object with previous values as keys, and indexes as values
// Iterate over array
    // If target - current number is in the object: return [i, obj[difference] ]
    // Else add nums[i]:i to obj
// If loop finishes, return false


// const twoSum = function(nums, target) {
//     let previous = {};  
//     for (let i=0; i < nums.length; i++){
//         let difference = target-nums[i];
//         if (difference in previous) {
//             return [previous[difference],i];
//         }
//         else{
//             previous[nums[i]] = i;
//         }
//     }
//     return false
// };

