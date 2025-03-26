const sumAll = function (numOne, numTwo) {
  let sum = 0,
    start = numOne,
    stop = numTwo;

  // when the arguements aren't numbers the function returns an error
  if (typeof start !== "number" || typeof stop !== "number") {
    return "ERROR";
  }

  // when the areguments are negative the function returns an error
  if (start < 0 || stop < 0) {
    return "ERROR";
  }

  // when the arguements are't an integer the function returns an error
  if (!Number.isInteger(start + stop)) {
    return "ERROR";
  }

  // swap the values to avoid reqriting the for-loop logic
  if (stop < start) {
    [start, stop] = [stop, start]; // Swap values
  }

  for (; start !== stop + 1; start++) {
    sum += start;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
