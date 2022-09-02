function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const levelOrder = function(root) {
    const result: number[][] = [];
    const queue = [root];
    if (!root) return result;
    while (queue.length) {
        const level: number[] = [];
        const qLen = queue.length;
        for (let i = 0; i < qLen; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right)
        }
        result.push(level);
    }
    return result;
};