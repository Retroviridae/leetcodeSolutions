/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // Make string lowercase
    s = s.toLowerCase();
    // Initialize start index and end index (two pointers)
    let start = 0;
    let end = s.length-1;
    // Iterate while start<end
    while (start<end){
        // Check if start is alphanumeric, if not, increment start and begin next loop with 'continue'
        if (!(s.charCodeAt(start)>96 && s.charCodeAt(start)<123 || s.charCodeAt(start)>47 && s.charCodeAt(start)<58)){
            start++
            continue
        }
        // Check if end is alphanumeric, if not, decrement end and begin next loop with 'continue'
        if (!(s.charCodeAt(end)>96 && s.charCodeAt(end)<123 || s.charCodeAt(end)>47 && s.charCodeAt(end)<58)){
            end--
            continue
        }
        // If the start and end values are different, return false
        if (s[start]!==s[end]) {
            return false
        }
        // Increment start and decrement end
        start++
        end--
    }
    return true
};

// (two pointers)
// Make string lowercase
// Initialize start index and end index (two pointers)
// Iterate while start<end
    // Check if start is alphanumeric, if not, increment start and start next loop with 'continue'
    // Same as above with end and decrement
    // If the start and end values are different, return false
    // Increment start and decrement end
// If loop finishes, return true