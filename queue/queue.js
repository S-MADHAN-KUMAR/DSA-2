class Queue{
    constructor(){
        this.items = []
    }
    enQueue(element){
        this.items.push(element)
    }
    deQueue(){
      return console.log(this.items.shift());
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return console.log(this.items[0]);
            
        }
        return null
    }
    size(){
        return console.log(this.items.length);
        
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty());

queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)

queue.size()
queue.print()

queue.deQueue()
queue.deQueue()

queue.print()
queue.peek()