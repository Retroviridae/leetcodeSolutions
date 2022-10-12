var reverseBetween = function(head, m, n) {
    // Initialize current node and node that will be last unreveresed node
    let before = head;
    let cur = head;
    // Iterate from 1 to m
    for (let i = 1; i < m; i++) {
        // Set before node to current
        before = cur;
        // Set current to current.next
        cur = cur.next;
    }
    // Initialize prev, next, and tail nodes
    let prev = null
    let tail = cur;
    let next = null;
    // Iterate from m to n
    for (let i = m; i <= n; i++) {
        // 4 steps
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // Point before.next at previous
    before.next = prev;
    // Point tail.next at current(now the first node after the reversal)
    tail.next = cur;
    // If the beginning of the list is reversed, return prev, if not return original head
    return m === 1 ? prev : head; 
};

// Initialize current node and node that will be last unreveresed node
// Iterate from 1 to m
    // Set before node to current, and current to current.next
// Initialize prev, next, and tail(first reversed node) nodes
// Iterate from m to n
    // 4 steps
    // Next = current.next
    // Current.next = previous
    // Previous = current
    // Current = next
// Point before.next at previous(now the last node that was reveresed)
// Point tail.next at current(now the first node after the reversal)
// If the beginning of the list is reversed, retuern prev, if not return original head

// if m == 1, we have no need to connect start list with reversed list reversed list itself is the start (or the head)
// Time Complexity: O(n)
// Space Complexity: O(1)


// var reverseBetween = function(head, m, n) {
//     let start = head;
//     let cur = head;
//     let i = 1;
//     while (i < m) {
//         start = cur;
//         cur = cur.next;
//         i++;
//     }
//     let prev = null, tail = cur;
//     while (i <= n) {
//         let next = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = next;
//         i++;
//     }
//     start.next = prev;
//     tail.next = cur;
//     return m == 1 ? prev : head; 
// };