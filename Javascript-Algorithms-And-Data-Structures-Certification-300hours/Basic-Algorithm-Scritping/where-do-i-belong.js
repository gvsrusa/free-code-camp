function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    return arr.sort().filter(el => el < num).length;
  }
  
  getIndexToIns([40, 45, 50, 50, 60, 70], 50);