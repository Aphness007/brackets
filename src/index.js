module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0){
      return false
    }

  let brackets = "";
  let newStr = str;
  for (let i = 0; i < str.length / 2; i++) {
    for (let y = 0; y < bracketsConfig.length; y++) {
      brackets = bracketsConfig[y][0] + bracketsConfig[y][1];
      newStr = newStr.replace(brackets, "");
    }
  }

  return newStr.length == 0;
};
  // if(str.length % 2 !== 0){
  //   return false
  // }
  // return true;
// }
