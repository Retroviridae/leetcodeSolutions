const diameterOfBinaryTree = function(root) {
    // Initialize result variable
    let result = 0;
    // Write recursive helper that returns height of node
    const dfs = (node) => {
        // If no node return 0
        if(!node) return 0;
        // Call helper on node.left and node.right
        const left = dfs(node.left);
        const right = dfs(node.right);
        // If height of left + height of right > result, update result
        result = Math.max(result, left + right);
        // Return height of node
        return 1 + Math.max(left, right);
    }
    // Call helper on root
    dfs(root);
    // Return result
    return result;
};

// Similar to balanced tree and maximum depth, track each node height

// Initialize result variable
// Write recursive helper that returns height of node
// Call helper on root
// Return result

// Recursive helper (dfs)
// If no node return 0
// Call helper on node.left and node.right
// If height of left + height of right > result, update result
// Return height of node


// const diameterOfBinaryTree = function(root) {
//     let result = 0;
//     const dfs = (node) => {
//         if(!node) return 0;
//         const left = dfs(node.left);
//         const right = dfs(node.right);
//         result = Math.max(result, left + right);
//         return 1 + Math.max(left, right);
//     }
//     dfs(root);
//     return result;
// };