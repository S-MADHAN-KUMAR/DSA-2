class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        if (!this.table[index]) {
            this.table[index] = []
        }
        this.table[index].push([key, value])
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1]
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(pair => pair[0] !== key);
            if (this.table[index].length === 0) {
                this.table[index] = undefined; 
            }
        }
    }

    removeDuplicates() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                let uniqueSet = new Set();
                this.table[i] = this.table[i].filter(pair => {
                    let keyValue = `${pair[0]}-${pair[1]}`;
                    if (!uniqueSet.has(keyValue)) {
                        uniqueSet.add(keyValue);
                        return true;
                    }
                    return false;
                });
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example Usage
const ht = new HashTable(10);
ht.set("name", "John")
ht.set("name", "John")
ht.set("name", "Doe")
ht.set("age", 25)
ht.set("city", "NYC")
ht.set("city", "NYC")

console.log("Before removing duplicates:")
ht.display();

ht.removeDuplicates();

console.log("After removing duplicates:");
ht.display();
