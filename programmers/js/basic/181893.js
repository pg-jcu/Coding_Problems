// 배열 조각하기
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      arr = arr.slice(0, query[i] + 1);
    }

    if (i % 2 === 1) {
      arr = arr.slice(query[i]);
    }
  }

  return arr;
}
