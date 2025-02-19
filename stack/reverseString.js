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

//===========================================================================================================//

function reverseString(value) {
    const NEWSTR_STACK = new Stack();
    for (let char of value) {
        NEWSTR_STACK.push(char)
    }
    let reversedString = '';
    while (!NEWSTR_STACK.isEmpty()) {
        reversedString += NEWSTR_STACK.pop()
    }
    return reversedString
}

//===========================================================================================================//

function reverseStringWords(str) {
    let words = str.split(' ');  
        let stack = new Stack();
    let reversedWords = words.map(word => {


        for (let char of word) {
            stack.push(char);
        }


        let reversedWord = '';
        while (!stack.isEmpty()) {
            reversedWord += stack.pop();
        }

        return reversedWord;
    });

    return reversedWords.join(' ')
}

console.log(reverseString('Bimillah'));
console.log(reverseStringWords('hello world'));

