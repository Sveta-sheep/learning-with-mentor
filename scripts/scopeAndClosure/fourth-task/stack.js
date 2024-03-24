export default class Stack {
    stack = new Set();

    constructor() {
    }

    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item) {
        this.stack.add(item)

        return this.stack.size
    }

    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop() {
        let deletedElement;

        this.stack.forEach(elem => { deletedElement = elem });

        this.stack.delete(deletedElement)


        return deletedElement
    }

    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty() {
        return !this.stack.size
    }

    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek() {
        let lastAddedElement;

        this.stack.forEach(elem => { lastAddedElement = elem });

        return lastAddedElement
    }

    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length() {
        return this.stack.size
    }
}

const stack1 = new Stack()
stack1.push(200);
console.log(stack1.peek()) // 200
stack1.push(300);
console.log(stack1.peek()) // 300