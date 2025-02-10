class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enQueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        } else {
            console.log("Queue is Full!");
        }
    }

    deQueue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
        } else {
            let result = [];
            let i = this.front;
            while (true) {
                result.push(this.items[i]);
                if (i === this.rear) break;
                i = (i + 1) % this.capacity;
            }
            console.log(result.join(" "));
        }
    }
}

// Testing the Circular Queue
const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // true
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);
queue.enQueue(50);
console.log(queue.isFull()); // true
queue.print(); // 10 20 30 40 50
queue.deQueue();
console.log(queue.peek());

queue.print(); // 20 30 40 50
queue.enQueue(60);
queue.print(); // 20 30 40 50 60
