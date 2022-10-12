const isSymmetric = function(root) {
    // Write recursive helper
    const helper = (node1, node2) => {
        // If neither node exists, return true
        if (!node1 && !node2) return true;
        // If only one node exists, return false
        if (!node1 || !node2) return false;
        // Check if nodes are the same
        return node1.val === node2.val
        // Check if children are mirrored
               && helper(node1.right,node2.left)
               && helper(node2.right,node1.left)
    }
    return helper(root,root);
};

// Write recursive helper
// If neither node exists, return true
// If only one node exists, return false
// Check if nodes are the same
// Check if children are mirrored





// const isSymmetric = function(root) {
//     const helper = (node1, node2) => {
//         if (!node1 && !node2) return true;
//         if (!node1 || !node2) return false;
//         return node1.val === node2.val
//                && helper(node1.right,node2.left)
//                && helper(node2.right,node1.left)
//     }
//     return helper(root,root);
// };