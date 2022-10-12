var middleNode = function(head) {
    // Initialize pointers
    let slow = head;
    let fast = head;
    // Iterate while fast and fast.next
    while(fast && fast.next){
        // Move slow once
        slow = slow.next;
        // Move fast twice
        fast = fast.next.next;
    }
    // Return slow
    return slow
};

// Fast and slow pointer problem

// Initialize pointers
// Iterate while fast and fast.next
    // Move slow once
    // Move fast twice
// Return slow

var middleNode2 = function(head) {
    // Initialize pointers
    let slow = head;
    let fast = head.next;
    // Iterate while fast
    while(fast){
        // Move slow once
        slow = slow.next;
        // If fast.next
        if (fast.next){
            // Move fast twice
            fast = fast.next.next
        }else {
            // If not move fast once (only occurs if fast is the tail node, needed because tail.next === null and null.next is undefined. First solution avoids this problem more elegantly.)
            fast = fast.next
        }
    }
    return slow
};

// Initialize pointers
// Iterate while fast
    // Move slow once
    // If fast !== tail
        // Move fast twice
        // If fast === tail move fast once
// Return slow






