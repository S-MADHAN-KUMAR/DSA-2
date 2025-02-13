class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = []
        }
        
        const bucket = this.table[index]
        const sameKeyItem = bucket.find(item => item[0] === key)
        
        if (sameKeyItem) {
            sameKeyItem[1] = value
        } else {
            bucket.push([key, value])
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (bucket) {
            const itemIndex = bucket.findIndex(item => item[0] === key);
            if (itemIndex !== -1) {
                
                bucket.splice(itemIndex, 1)
                if (bucket.length === 0) {
                    this.table[index] = undefined
                }
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

// **Testing the HashTable**
const table = new HashTable(50);

console.log('===========================================');
table.set("name", "bismillah");
table.set("name", "BISMILLAH");
table.set("age", 14);
table.set("mane", "Allhamduillah..");
table.display();

console.log('===========================================');
table.remove("age");

table.display();
console.log('===========================================');
