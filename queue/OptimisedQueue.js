class Queue{
    constructor(){
        this.items={}
        this.rear = 0
        this.front = 0
    }
    enQueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    deQueue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.reat - this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items);
        
    }
}

const queue = new Queue()

queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)

console.log(queue.size());

queue.print()

queue.deQueue()
queue.deQueue()

queue.print()
console.log(queue.peek());
