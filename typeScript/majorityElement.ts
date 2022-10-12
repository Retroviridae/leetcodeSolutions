var majorityElement = function(nums) {
    // Initialize hash map
    let obj = {};
    // Iterate
    for(let i = 0; i <nums.length; i++){
        // Check if number is in object
        if(obj[nums[i]]){
            // If it is, increment key by one
            obj[nums[i]]+=1;
        }else{
            // If not, add it to the object with 1 as the key
            obj[nums[i]] = 1;
        }
        // Check if the number appears more than half the numbers
        if(obj[nums[i]] > nums.length/2) return nums[i];
    }
};

// Hash map 

// Initialize hash map
// Iterate
    // Check if number is in object
    // If it is, increment key value
    // Or make it a key with value of 1
    // Check if key value is greater than half of nums length and return nums[i]