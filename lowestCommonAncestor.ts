const lowestCommonAncestor = function(root, p, q) {
    let cur = root;
    while (cur) {
        if (cur.val < p.val && cur.val < q.val) {
            cur = cur.right;
        }
        else if (cur.val > p.val && cur.val > q.val) {
            cur = cur.left;
        }
        else {
            return cur;
        }
    }
};


// const lowestCommonAncestor = function(root, p, q) {
//     let cur = root;
//     while (cur) {
//         // If current is smallest, go right
//         if (cur.val < p.val && cur.val < q.val) {
//             cur = cur.right;
//         }
//         // If current is biggest, go left
//         else if (cur.val > p.val && cur.val > q.val) {
//             cur = cur.left;
//         }
//         // If in between/equal to p or q , return current
//         else {
//             return cur;
//         }
//     }
// };

// Make a variable and set it equal to root
// Iterate while the variable is truthy
    // If current is smallest, go to right node
    // If current is biggest, go to left node
    // If p<=cur<=q return cur

// const lowestCommonAncestor = function(root, p, q) {
//     let cur = root;
//     while (cur) {
//         if (cur.val < p.val && cur.val < q.val) {
//             cur = cur.right;
//         }
//         else if (cur.val > p.val && cur.val > q.val) {
//             cur = cur.left;
//         }
//         else {
//             return cur;
//         }
//     }
// };