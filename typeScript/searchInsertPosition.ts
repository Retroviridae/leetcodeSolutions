var searchInsert = function(nums, target) {
    // Initialize l,m,r
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor(r/2);
    // Iterate while l <=r
    while (l <= r){
        // If target is bigger, move l to m + 1
        if (nums[m] < target){
            l = m + 1;
        }
        // If smaller move r to m - 1
        else if (nums[m] > target){
            r = m - 1;
        }
        // If nums[m] === target, return m
        else{
            return m;
        }
        // Move m back in between l and r
        m = l + Math.floor((r -l) / 2 )
    }
    // If target not found, return m + 1
    return m + 1;
};

// Binary search similar to first bad version

// Initialize l,m,r
// Iterate while l <=r
    // If target is bigger, move l to m + 1
    // If smaller move r to m - 1
    // If nums[m] === target, return m
    // Move m back in between l and r
// If target not found, return m + 1

// var searchInsert = function(nums, target) {
//     let l = 0;
//     let r = nums.length - 1;
//     let m = Math.floor(r/2);
//     while (l <= r){
//         if (nums[m] < target){
//             l = m + 1;
//         }
//         else if (nums[m] > target){
//             r = m - 1;
//         }
//         else{
//             return m;
//         }
//         m = l + Math.floor((r -l) / 2 )
//     }
//     return m + 1;
// };