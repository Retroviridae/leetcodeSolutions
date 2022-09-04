function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const levelOrder = function(root) {
    // If there is no root return []
    if (!root) return [];
    // Initialize result array and queue with root in queue;
    const result: number[][] = [];
    const queue = [root];
    // Iterate until queue empty
    while (queue.length){
        // Initialize level arrary and current queueLength
        let level: number[] = [];
        let qLength = queue.length;
        // Iterate from 0 to current queueLength
        for (let i = 0; i < qLength; i++){
            // Take node from queue and push into level
            let node = queue.shift();
            level.push(node.val);
            // Push children into queue
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        // Push level into result
        result.push(level);
    }
    // Return result
    return result;
};


// If there is no root return []
// Initialize result array and queue with root in queue;
// Iterate until queue empty
    // Initialize level arrary and current queueLength 
    // Iterate from 0 to current queueLength
        // Take node from queue and push into level
        // Push children into queue
    // Push level into result
// Return result



// const levelOrder = function(root) {
//     if (!root) return [];
//     const result = [];
//     const queue = [root];
//     while (queue.length){
//         let level = [];
//         let qLength = queue.length;
//         for (let i = 0; i < qLength; i++){
//             let node = queue.shift();
//             level.push(node.val);
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         result.push(level);
//     }
//     return result;
// };