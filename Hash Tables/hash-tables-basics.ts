import {sha256} from "js-sha256";

class KeyValuePair {
    public next: KeyValuePair | null;
    constructor(public key: number, public value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    public count: number;
    public capacity: number;
    public data: (null | KeyValuePair)[];

    constructor(numBuckets = 4) {
        this.count = 0;
        this.capacity= numBuckets;
        this.data = new Array(numBuckets);
        this.data.fill(null, 0);
    }

    hash(key) {
        // takes in string 'key'
        // returns first 8 chrs of key's sha256 as an int

        return parseInt(sha256(key.slice(0, 8)), 16);
    }

    hashMod(key) {
        // takes in string 'key'
        // returns hash modulo of the capacity of the data array

        return this.hash(key) % this.capacity;
    }

    insertNoCollisions(key, value) {
        const index = this.hashMod(key);

        if (!this.data[index]) {
            this.data[index] = new KeyValuePair(key, value);
            this.count++;
        } else{
            throw new Error("hash collision or same key/value pair already exists!");
        }
    }

    insertWithHashCollisions(key, value) {
        const index = this.hashMod(key);
        const keyVal = new KeyValuePair(key, value);

        if (this.data[index]) {
            keyVal.next = this.data[index];
        } 
        this.data[index] = keyVal;
        this.count++ 
    }

    insert(key, value) {
        const keyVal = new KeyValuePair(key, value);
        const index = this.hashMod(key);
        let overwrite = false;

        if (!this.data[index]) {
            this.data[index] = keyVal;
        } else {
            // traverse the node, check if the new KeyValuePair
            // contains the same key as a pair already in the hash table
            if (this.data[index]?.next) {
                let current = this.data[index];
                while (current) {
                    if (current.key === keyVal.key) {
                        current.value = keyVal.value;
                        this.count--;
                        overwrite = true;
                    }
                    current = current.next;
                }
            }
            if (!overwrite) {
                keyVal.next = this.data[index];
                this.data[index] = keyVal;
            }
        }
        this.count++;
    }
}

module.exports = HashTable;
