function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(ele) {
        collection.push(ele);
        return collection.length;
    }
    this.dequeue = function() {
        return collection.shift();
    }
    this.front = function() {
        return collection[0];
    }
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return collection.length>0 ? false: true;
    }
    // Only change code above this line
}

const q = new Queue();
q.enqueue(3);
q.front();