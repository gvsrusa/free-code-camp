function findLongestWordLength(str) {
  // str = str.split(' ').map(ele => ele.length).sort((a,b)=>a-b);    
  // return str[str.length-1];
  return Math.max(...str.split(' ').map(ele => ele.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");