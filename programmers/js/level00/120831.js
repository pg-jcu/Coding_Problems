// 짝수의 합
function solution(n) {
  let answer = 0;
    
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  
  return answer;
}

// 다른 풀이
// function solution(n) {
//   var half = Math.floor(n / 2);
//   return half * (half + 1);
// }