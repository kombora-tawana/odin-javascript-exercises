const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  if (num === 0) {
    return "";
  }

  let resultStr = "";
  while (num !== 0) {
    resultStr += string;
    num--;
  }
  return resultStr;
};

// Do not edit below this line
module.exports = repeatString;
