var climbStairs = function(n) {
    // Imagine starting at fib(1): Initialize pointers for previous step(fib(0)===0), current step(fib(1)===1), and next step
    let prev = 0;
    let cur = 1;
    let next;
    // Iterate
    for (let i = 0; i < n; i++) {

        // Calculate next step (fib(n-1)+fib(n-2))
        next = cur + prev;
        // Set previous to current
        prev = cur;
        // Set current to next
        cur = next; 
    }
    // Return current step (fib(n+1))
    return cur;
};

// Basically return fib(n+1) for the answer

// Imagine starting at fib(1): Initialize pointers for previous step(0), current step(1), and next step
// Iterate
    // Calculate next step (fib(n-1)+fib(n-2))
    // Set previous to current
    // Set current to next
// Return current step (fib(n+1))