function whatIsInAName(collection, source) {

  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj=>{
    return srcKeys
      .map(key=>{
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce((a, b)=> {
        return a && b;
      });
  });
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })