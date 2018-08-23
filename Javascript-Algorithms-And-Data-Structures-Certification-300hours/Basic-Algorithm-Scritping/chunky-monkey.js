function chunkArrayInGroups(arr, size) {
    // Break it up.
    let arr0 = [];
    for (let i = 0; i < arr.length; i += size) {
      arr0.push(arr.slice(i, size+i));
    }
    return arr0;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);