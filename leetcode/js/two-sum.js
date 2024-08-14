/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i];

    if (map.has(result)) {
      return [map.get(result), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
