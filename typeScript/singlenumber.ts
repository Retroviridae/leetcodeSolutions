var singleNumber = function(nums) {
    return nums.reduce((a, b) => a ^ b);
};

// Use reduce to XOR the input with itself