// 크기가 작은 부분 문자열
function solution(t, p) {
  let count = 0;
  
  for (let i = 0; i <= t.length - p.length; i++) { 
    if (t.slice(i, i + p.length) <= p) {
      count++;
    }
  }
  
  return count;
}