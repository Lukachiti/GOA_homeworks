
var MinStack = function() {
    // Primary stack to store all pushed elements in LIFO order
    this.stack = [];
    
    // Auxiliary stack to keep track of the minimum element at each level
    this.minStack = [];
};

/** 
 * Pushes the element 'value' onto the stack.
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    // 1. Add the new value to the main stack
    this.stack.push(value);
    
    // 2. Determine if this value should also go onto minStack:
    //    - If minStack is empty, this value is automatically the current minimum.
    //    - If value <= current minimum (top of minStack), it becomes the new minimum.
    //    Note: We use '<=' (not '<') so duplicate minimum values are properly tracked.
    if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
    }
};

/**
 * Removes the element on the top of the stack.
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 1. Remove and retrieve the top element from the main stack
    const popped = this.stack.pop();
    
    // 2. Check if the element being popped is the current minimum:
    //    - If it matches the top of minStack, pop it from minStack as well
    //      so the previous minimum is restored.
    if (popped === this.getMin()) {
        this.minStack.pop();
    }
};

/**
 * Gets the top element of the main stack without removing it.
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return the last item added to the main stack array (top of the stack)
    return this.stack[this.stack.length - 1];
};

/**
 * Retrieves the current minimum element in the stack.
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // The top of minStack always holds the minimum value of all current elements
    return this.minStack[this.minStack.length - 1];
};




