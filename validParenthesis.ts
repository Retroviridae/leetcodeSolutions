var isValid = function(s) {
    // Make obj of parenthesis with key as opening, closing as value, and empty array 
    let arr: string[] = [];
    let obj = {
        '(':')',
        '{':'}',
        '[':']'            
    }
    // Iterate 
    for (let i=0; i<s.length; i++){
        // If string[i] is an opening: push it into array
        if (s[i] in obj){
            arr.push(s[i])
            
        }
        // Otherwise: check if current is the closure for latest item in array
        else {
            if (s[i] === obj[arr[arr.length-1]]){
                // if it is, remove the opening from the array
                arr.pop();
                // otherwise the parenthesis is invalid
            }else return false
        }
    }
    // if array is empty, parenthesis is valid
    return arr.length===0
};

// Make obj of parenthesis with key as opening, closing as value, and empty array
// Iterate: 
    // If string[i] is an opening: push it into array
    // Else: check if end of the array is the closing 
        // If it is: pop from the array. If it is not, return false
// Once the loop is over, return array.length === 0