var maxDepth = function(root) {
    // Write recursive helper that tracks height
    const dfs = (node) => {
        // If no node return 0
        if(!node) return 0;
        // Return the max of dfs(left) and dfs(right) plus 1
        return 1 + Math.max(dfs(node.left), dfs(node.right))
    }
    // Return helper(root)
    return dfs(root)
};

// Similar to balanced binary tree but easier

// Write recursive helper that tracks height
// Return helper(root)

// Recursive helper (dfs)
// If no node return 0
// Return the max of dfs(left) and dfs(right) plus 1

// Think about how balanced tree tracked height and boolean isBalanced. This just tracks height
