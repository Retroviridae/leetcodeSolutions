var hasCycle = function(head) {
    // If no head return false
    if (!head) return false
    // Declare fast and slow pointers
    let slow = head;
    let fast = head.next;
    // Iterate while fast !== slow
    while(slow !== fast){
        // If fast reaches the end of the list return false
        if (!fast || !fast.next) return false
        // Move slow once
        slow = slow.next
        // Move fast twice
        fast =fast.next.next
    }
    return true
};

// Fast and slow pointers

// If no head return false
// Declare fast and slow pointers
// Iterate while fast !== slow
    // If fast reaches the end of the list return false
    // Move slow once
    // Move fast twice
// Return true