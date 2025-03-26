const removeFromArray = function (inputArr = [], ...itemsToremove) {
  // returns the input array if no values were specified to be removed
  if (itemsToremove.length === 0) {
    return inputArr;
  }

  let resultArr = inputArr;
  for (let i = 0; i !== itemsToremove.length; i++) {
    resultArr = resultArr.filter((item) => itemsToremove[i] !== item);
    console.log(resultArr);
  }
  return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// removeFromArray([1, 2, 3, 4, 5, 8], 8, 3);
