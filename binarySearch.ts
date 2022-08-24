var search = function(nums, target) {
    // Declare two pointers and a middle pointer that is half the array length
    let l = 0
    let r = nums.length-1
    let middle = Math.floor(nums.length/2)
    // Iterate while l<=r
    while (l<=r){
        // if nums[middle] is the arget, return the middle
        if(nums[middle]===target) return middle
        // if the target is on the right side of the array, move left to the middle+1
        if(nums[middle]<target){
            l = middle + 1;
        // if the target is on the left side of the array, move right to the middle-1
        }else {
            r = middle - 1;
        }
        // then set middle halfway between l&r
        let difference = Math.floor((r-l)/2)
        middle = l + difference
    }
    // If the loop ends, the target is not found, return -1
    return -1
};

// Two pointers tracking the rightmost possible location of the num(r), and lowest possible(l)

// Declare two pointers and a middle pointer that is half the array length
// Iterate while l<=r
    // if nums[middle] is the arget, return the middle
    // if the target is bigger than the middle, move left to the middle+1
    // if smaller, move right to middle-1
    // then set middle halfway between l&r
// If the loop ends, the target is not found, return -1

var search2 = function(nums, target) {
    let l = 0
    let r = nums.length-1
    let middle = Math.floor(nums.length/2)
    while (l<=r){
        if(nums[middle]===target) return middle
        if(nums[middle]<target){
            l = middle + 1;
        }else {
            r = middle - 1;
        }
        let difference = Math.floor((r-l)/2)
        middle = l + difference
    }
    return -1
};