// 배열 회전시키기
function solution(numbers, direction) {
  switch (direction) {
    case 'right':
      return [numbers.at(-1), ...numbers.slice(0, -1)];
    case 'left':
      return [...numbers.slice(1), numbers[0]];
  }
}