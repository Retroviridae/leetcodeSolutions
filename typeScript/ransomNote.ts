var canConstruct = function(ransomNote, magazine) {
    // Initialize frequency counter hash map
    let obj = {};
    // Iterate over ransom note
    for(let i = 0;i < ransomNote.length;i++){
        // Decrement keys that appear in note
        let r = ransomNote[i];
        obj[r] ? obj[r]-- : obj[r] = -1;
    }
    // Iterate over magazine
    for(let i = 0;i < magazine.length;i++){
        let m = magazine[i];
        // Increment keys that appear in magazine
        obj[m] ? obj[m]++ : obj[m] = 1;
    }
    // Return whether or not any of the keys in frequency counter are negative
    return !Object.values(obj).some((e:any) => e < 0)
};

// Initialize frequency counter hash map
// Iterate over ransom note
    // Decrement keys that appear in note
// Iterate over magazine
    // Increment keys that appear in magazine
// Return whether or not any of the keys in frequency counter are negative

const hagayCanConstruct = function(ransomNote, magazine) {
    const map = {};
    for (const c of magazine) {
        map[c] = ++map[c] || 1;
    }
    for (const c of ransomNote) {
        if (!map[c]--) return false;
    }
    return true;
};

// Hagay's version:
// I like it because you don't have to iterate over keys at the end, just increment first.
// Then if decrement drops below 0 return false. 
// This is faster (O2n) vs (O3n) so not significantly faster but considering it's also cleaner