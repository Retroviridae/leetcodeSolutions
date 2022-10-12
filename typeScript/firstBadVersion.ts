var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let r = n;
        let middle = Math.floor(n/2);
        let result = n;
        while (l<=r){
            if(isBadVersion(middle)){
                result = middle
                r = middle - 1;
            }else{
                l = middle + 1;
            }
            let difference = Math.floor((r-l)/2);
            middle = l + difference;
        }
        return result
    };
};

// Binary search with a small twist

// Initialize binary search variables and result variable(this is the twist, more on this at the end)
// Iterate while l <= r
    // If middle is a bad version check the earlier versions and update result to middle
    // Otherwise, check later versions (and don't update result)
    // Move middle variable to the new middle
// Return result variable

// So the twist is that you need to return a bad version.
// If you hit the else statement, you've found a good version.
// So you can't return middle like in a regular binary search.
// You have to return result and only update it when middle is a bad version. 
// There are other ways around this twist like returning l or middle + 1 or right + 1.
// But those methods are more confusing and harder to follow than this one. 
// Could probably avoid by changing conditional to l<r from l<=r but again, probably more confusing.
// The benefit of those is that they are closer, almost verbatim, pure binary search.
// Just remember binary search and you can troubleshoot from there.

var solution2 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let r = n;
        let middle = Math.floor(n/2);
        while(l<=r){
            if(isBadVersion(middle)) r = middle - 1;
            else l = middle + 1;
        }
        return middle + 1
    };
};