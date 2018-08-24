function sumAll(arr) {
  let arrSumTotal = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    arrSumTotal += i;
  }
  return arrSumTotal;
}

sumAll([5, 10]);

/* function sumAll(arr) {
  const arr0 = arr.sort((a, b) => a - b);
  const arrSumTotal = [];
  for (let i = arr[0]; i <=arr0[1]; i++) {
    arrSumTotal.push(i);
  }
  return arrSumTotal.reduce((a, b) => a + b);
}

sumAll([5, 10]); */
