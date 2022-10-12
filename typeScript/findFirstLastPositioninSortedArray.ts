const searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length-1;
    let m = l + Math.floor((r - l) / 2);
    while(l <= r) {
        m = l + Math.floor((r - l) / 2);
        if(nums[m] >= target) r = m - 1;
        else l = m + 1;
    }
    if(nums[l] !== target) return [-1, -1];
    const start = l;
    r = nums.length-1;
    while(l <= r) {
        m = l + Math.floor((r - l) / 2);
        if(nums[m] <= target) l = m+1;
        else r = m-1;
    }
    return [start, r];
};