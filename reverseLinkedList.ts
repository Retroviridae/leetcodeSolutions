var reverseList = function(head) {
    let prev = null;
    let cur = head;
    let next = null;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

// Initialize pointers for previous, current, and next nodes. Set current to head and prev/next to null
// Iterate while current is truthy
    // 1. Set next to current.next
    // 2. Set current.next to previous
    // 3. Set previous to current
    // 4. Set current to next
// Return previous