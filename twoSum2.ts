var twoSum = function(numbers, target) {
    // Declare 2 pointers, lowest and highest numbers
    let l = 0;
    let r = numbers.length-1;
    // Iterate until you find the solution
    while(numbers[l] + numbers[r] !== target){
        // If sum is too low, increase l. If too high, decrease r
        (numbers[l] + numbers[r] < target) ? l++ : r--;
    }
    // Return [indexes]
    return [l + 1,r + 1];
};

// Input array is sorted so this is a 2 pointer problem, not a hashmap problem

// Declare 2 pointers, lowest and highest numbers
// Iterate until you find the solution
    // If sum is too low, increase l
    // If too high, decrease r
// Return [l+1, r+1]

// var twoSum = function(numbers, target) {
//     let l = 0;
//     let r = numbers.length-1;
//     while(numbers[l] + numbers[r] !== target){
//         (numbers[l] + numbers[r] < target) ? l++ : r--;
//     }
//     return [l + 1,r + 1];
// };