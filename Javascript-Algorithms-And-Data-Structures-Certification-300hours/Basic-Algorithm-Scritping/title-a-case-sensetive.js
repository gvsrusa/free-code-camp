// function titleCase(str) {
//     return str.toLowerCase().split(" ").map(ele=>ele[0].toUpperCase()+ele.slice(1)).join(" ");
//   }
  
// titleCase("Im a little tea pot");

function titleCase(str) {
  return str.toLowerCase().replace(/\S+/g, (word)=> {
      return word[0].toUpperCase()+word.slice(1);
  });
}
titleCase("Im a little tea pot");