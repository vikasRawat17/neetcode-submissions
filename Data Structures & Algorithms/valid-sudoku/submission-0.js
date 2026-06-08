class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
      const rows =Array.from({length:9},()=>new Set());
      const columns=Array.from({length:9},()=>new Set ());
      const boxes= Array.from({length:9},()=>new Set());

      for(let r=0;r<board.length;r++){
        for(let c=0;c<board[0].length;c++ ){

            const val= board[r][c];
            if(val==='.')continue;

            const b= Math.floor(r/3)*3+Math.floor(c/3);


            if(rows[r].has(val)||columns[c].has(val)|| boxes[b].has(val)){
                return false;
            }
             rows[r].add(val);
            columns[c].add(val);
            boxes[b].add(val);
        }
      }
      return true;

    }
}
