/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  if (num === 0) {
    return "0";
  }

  if (num < 0) {
    num += Math.pow(2, 32);
  }

  let result = "";

  while (num > 0) {
    const res = num % 16;
    result = hex[res] + result;
    num = Math.floor(num / 16);
  }

  return result;
};

var toHex = function (num) {
  if (num < 0) {
    return (num >>> 0).toString(16);
  }

  return num.toString(16);
};
