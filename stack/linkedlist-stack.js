class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
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
  
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }

  
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode= prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    reverse() {
        let current = this.head;
        let previous = null;
    
        while (current) {
          let nextNode = current.next;
          current.next = previous;
          previous = current;
          current = nextNode;
        }
    
        this.head = previous;
        return this;
      }
    
  
    print() {
      if (this.isEmpty()) { 
        console.log('List is Empty');
      } else {
        let curr = this.head;
        let listValues = '';
        while (curr) {
          listValues += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValues.trim());
      }
    }
  }


class Stack {
    constructor() {
       this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }
    pop(){
       return this.list.removeFromIndex(0)
    }
    peak(){
       return this.list.head.value
    }
    isEmpty(){
      return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    print(){
        return this.list.print()
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print()
stack.pop()
stack.pop()
stack.print()
// console.log(stack.getSize())
// console.log(stack.peak());
// stack.isEmpty()
