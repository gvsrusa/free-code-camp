// function repeatStringNumTimes(str, num) {
//     var accumulatedStr = '';
  
//     while (num > 0) {
//       accumulatedStr += str;
//       num--;
//     }
  
//     return accumulatedStr;
//   }
// ------------------------------------------------
// function repeatStringNumTimes(str, num) {
//     if(num < 0)
//       return "";
//     if(num === 1)
//       return str;
//     else
//       return str + repeatStringNumTimes(str, num - 1);
//   }
// ------------------------------------------------
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
  }
  
  repeatStringNumTimes("abc", 3);