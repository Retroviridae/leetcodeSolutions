var binarySearch = function(nums, target) {
    // Declare two pointers
    let l = 0;
    let r = nums.length - 1;
    // Iterate while l<=r
    while (l <= r){
        // Calculate the middle
        let m = l + Math.floor((r - l) / 2);
        // if nums[middle] is the arget, return the middle
        if (nums[m] === target) return m;
        // if the target is on the right side of the array, move left to the middle + 1
        else if (nums[m] > target) r = m - 1;
        // if the target is on the left side of the array, move right to the middle - 1
        else l = m + 1;
    }
    // If the loop ends return -1
    return -1;
}

// Two pointers tracking the rightmost possible location of the num(r), and lowest possible(l)

// Declare two pointers and a middle pointer that is half the array length
// Iterate while l<=r
    // if nums[middle] is the arget, return the middle
    // if the target is bigger than the middle, move left to the middle+1
    // if smaller, move right to middle-1
    // then set middle halfway between l&r
// If the loop ends, the target is not found, return -1

var binarySearch = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r){
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] === target) return m;
        else if (nums[m] > target) r = m - 1;
        else l = m + 1;
    }
    return -1;
}