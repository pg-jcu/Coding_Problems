// 길이에 따른 연산
function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, cur) => acc + cur, 0);
  } else {
    return num_list.reduce((acc, cur) => acc * cur, 1);
  }
}
