function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    return [...arr2].splice(0,n).concat(arr1,arr2.slice(n));
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);




//   function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let arr0 = arr2.slice(0,n); 
//     let arr3 = arr2.slice(n);
//     arr2 = [...arr0, ...arr1, ...arr3];
//     return arr2;
//   }
  
//   frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Note:1 
//   1. splice(a,b) - changes the original Array (Cut). a is inclusive and b is count from position a. 
//      ex: arr1 = [1,2,3,4,5,6];
//      let arr2 = arr1.splice(1,3);
//      console.log(arr1); //arr1 = [1,5,6]
//      console.log(arr2); //arr2 = [2,3,4]

// Note:2 
//   1. slice(a,b) - doesn't change the original Array. a is inclusive and b exclusive. 
//      ex: arr1 = [1,2,3,4,5,6];
//      let arr2 = arr1.slice(1,3);
//      console.log(arr1); //arr1 = [1,2,3,4,5,6]
//      console.log(arr2); //arr2 = [2,3] 