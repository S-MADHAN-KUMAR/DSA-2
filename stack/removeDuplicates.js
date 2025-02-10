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

    removeDuplicate() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        
        let curr = this.head;
        while (curr) {
            let runner = curr;
            while (runner.next) {
                if (runner.next.value === curr.value) {
                    runner.next = runner.next.next; // Skip duplicate node
                    this.size--;
                } else {
                    runner = runner.next;
                }
            }
            curr = curr.next;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        let curr = this.head;
        let result = []
        while (curr) {
            result.push(curr.value)
            curr = curr.next;
        }
        console.log(result.join(' | '));
    }
}

// Example Usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(10);
stack.push(30);
stack.push(20);
stack.print();  // 20 -> 30 -> 10 -> 20 -> 10 -> null

stack.removeDuplicate();
stack.print();  // 30 -> 10 -> 20 -> null
