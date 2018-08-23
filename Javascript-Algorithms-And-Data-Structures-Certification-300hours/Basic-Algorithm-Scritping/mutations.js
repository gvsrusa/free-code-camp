function mutation(arr) {
    let arr0 = arr[0].toLowerCase().split("");
    let arr1 = arr[1].toLowerCase().split("");
    for (let i = 0; i < arr1.length; i++) {
      if (arr0.indexOf(arr1[i]) === -1) return false;
    }
    return true;
  }
  
  mutation(["jassgdgh$%^&*()a5546ss325sfkfello", "]#$%^&*[;'he1345yhgsa"]);
  