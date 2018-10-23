function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.push = function(ele) {
        collection.push(ele);
    }
    this.pop = function() {
        return collection.pop();
    }
    this.peek = function() {
        return collection[collection.length-1];
    }
    this.isEmpty = function() {
        return collection.length>0 ? false: true
    }
    this.clear = function() {
        for(let i=0;i<collection.length;i++){
            collection.pop();
        }
    }
    // Only change code above this line
}

const exa = new Stack();
exa.print();