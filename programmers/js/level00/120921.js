// 문자열 밀기
function solution(A, B) {
  let count = 0;
  
  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return count;
    }
    
    A = A.at(-1) + A.slice(0, -1);
    count++;
  }
  
  return -1;
}

// 다른 풀이
// function solution(A, B) {
//   return (B + B).indexOf(A);
// }