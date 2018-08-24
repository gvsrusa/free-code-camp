function destroyer(arr, ...args) {
    // Remove all the values
    return arr.filter(el=>args.indexOf(el)===-1);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);