const isBalanced = function(root) {
    // Write recursive helper function
    const dfs = root => {
        // Check if there is a tree
        if (!root) return [true, 0];
        // Call helper on left and right
        const left = dfs(root.left);
        const right = dfs(root.right);
        // Compare heights
        let isBalanced = Math.abs(left[1] - right[1]) <= 1 
        // Are left and right nodes balanced?
                   && left[0] && right[0];
        // Return [is it balanced?, height of the subtree]
        return [isBalanced, 1 + Math.max(left[1], right[1])];
    }
    // Return boolean portion of recursive function
    return dfs(root)[0];
}

// Recursive DFS

// Write recursive helper function
// Call helper on root
// Return helper(root) boolean

// Recursive helper
// Check if there is a tree
// Call helper on left and right
// Check if node is balanced
    // Difference between height left and height right is <= 1
    // Both sides are balanced
// Return [is it balanced?, height of the subtree]

// const isBalanced = function(root) {
//     const dfs = root => {
//         if (!root) return [true, 0];
//         const left = dfs(root.left);
//         const right = dfs(root.right);
//         let isBalanced = Math.abs(left[1] - right[1]) <= 1 
//                    && left[0] && right[0];
//         return [isBalanced, 1 + Math.max(left[1], right[1])];
//     }
//     return dfs(root)[0];
// }