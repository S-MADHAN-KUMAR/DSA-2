class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        const poppedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        return poppedValue;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.head.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        let curr = this.head;
        let result = [];
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        console.log(result.join(" | "));
    }

    sort() {
        const temp_stack = new Stack()
        while (!this.isEmpty()) {
            const currentvalue = this.pop()

            while (!temp_stack.isEmpty() && temp_stack.peek() > currentvalue) {
                this.push(temp_stack.pop())
            }
            temp_stack.push(currentvalue)
        }

       
        while (!temp_stack.isEmpty()) {
            this.push(temp_stack.pop())
        }
    }
}

// Example Usage:
const stack = new Stack()
stack.push(1)
stack.push(4)
stack.push(3)
stack.push(6)
stack.print()  // Output: 6 | 3 | 4 | 1
stack.sort()
stack.print()  // Output: 1 | 3 | 4 | 6 (Sorted in ascending order)
