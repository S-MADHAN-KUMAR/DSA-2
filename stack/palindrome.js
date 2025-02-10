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
        let result = []
        while (curr) {
            result.push(curr.value)
            curr = curr.next;
        }
        console.log(result.join(' | '));
    }

}

function palindrome(str){
    const NEW_STACK = new Stack();
    for(let char of str){
        NEW_STACK.push(char);
    }
    for(let i=0;i<str.length;i++){
        if(NEW_STACK.pop()!==str[i]){
            return false
        }
    }
    return true
}

console.log(palindrome('mom'));

