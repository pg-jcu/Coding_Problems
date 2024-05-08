// 이차원 배열 대각선 순회하기

class Solution {
    public int solution(int[][] board, int k) {
        int result = 0;
        
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (i + j <= k) {
                    result += board[i][j];
                }
            }
        }
        
        return result;
    }
}