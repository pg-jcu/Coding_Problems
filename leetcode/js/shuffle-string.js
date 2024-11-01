/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = Array.from(s);

  for (let i = 0; i < indices.length; i++) {
    const idx = indices[i];
    result[idx] = s[i];
  }

  return result.join("");
};
