const reverseString = function (inputStr = "") {
  let arrStr = inputStr.split("");
  let outStr = arrStr.reverse().join("");
  return outStr;
};

// Do not edit below this line
module.exports = reverseString;
