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

    getSize() {
        return this.size;
    }

    push(value) {
        const NODE = new Node(value);
        NODE.next = this.head;
        this.head = NODE;
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const POPPED_VALUE = this.head.value;
            this.head = this.head.next;
            this.size--;
            return POPPED_VALUE
        }
    }

    peek() {
        if (this.isEmpty()) {
            return `Stack is empty`
        }
        else {
            return this.head.value;
        }
    }

   
    print() {
        if (this.isEmpty()) {
            console.log(`Stack is empty`);
        }
        else {
            let curr = this.head;
            let stackValues = '';
            while (curr) {
                stackValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(stackValues);
        }
    }

    reverse() {
        if (this.isEmpty()) {
            return `Stack is empty`;
        }
        else {
            let prev = null;
            let curr = this.head;
            while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;
        }
    }

    removeNode(value){
        if(this.isEmpty()){
            return `Stack is empty`;
        }
        if(this.head.value===value){
            let removedNode = this.head;
            this.head = removedNode.next;
            this.size--
            return removedNode.value;
        }
        else{
            let curr = this.head;
            while(curr.next){
                if(curr.next.value===value){
                    let removedNode = curr.next;
                    curr.next = removedNode.next;
                    this.size--
                    return removedNode.value
                }
                curr = curr.next;
            }
            return null;
        }
    }

    removeMidElement() {
        if (this.isEmpty()) {
            return `Stack is empty`
        }
    
        let slow = this.head;
        let fast = this.head;
        let prev = null;
    
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev) {
            prev.next = slow.next;
        }
        else {
            this.head = null;
        }
        this.size--
    }

    clone() {
        const NEW_STACK = new Stack();
        let curr = this.head;
        while (curr) {
            NEW_STACK.push(curr.value);
            curr = curr.next;
        }
        return NEW_STACK.reverse()
    }

    convertToArray() {
        const ARR = [];
        let curr = this.head;
        while (curr) {
            ARR.push(curr.value);
            curr = curr.next;
        }
        return ARR
    }

    search(value) {
        if (this.isEmpty()) {
            return null
        }
        else {
            let curr = this.head;
            let index = 0;
            while (curr) {
                if (curr.value === value) {
                    return `Value ${value} found at Index ${index}`
                }
                curr = curr.next;
                index++
            }
            return `Value not found in the Stack`
        }
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
// stack.pop()
stack.print()
// console.log('PEEK IS : '+stack.peek());
stack.reverse()
stack.print()

