// 정수 내림차순으로 배치하기
function solution(n) {
  var answer = 0;

  answer = String(n).split('').sort((a, b) => b - a).join('');

  return +answer;
}