// 가운데 글자 가져오기

function solution(s) {
  var answer = '';

  answer = s.length % 2 == 0 ? 
    s.slice(s.length / 2 - 1, s.length / 2 + 1) : 
    s.slice(s.length / 2, s.length / 2 + 1);

  return answer;
}