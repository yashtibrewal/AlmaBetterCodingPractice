
/**
 * assuming ships do not share same border.
 * @param {[][]} board 
 */
var countBattleships = function (board) {
    // Your code goes here
    let boardHeight = board.length;
    let rowWidth = board[0].length;

    const visited = new Array(boardHeight);

    for (let i = 0; i < boardHeight; i++) {
        visited[i] = new Array(boardHeight).fill(false);
    }

    let ships = 0;

    // traverse a position
    // if not visited
    // check if its marked position
    // increment marker
    // visit position below and check the same
    // mark all visited positions accordingly.

    for (let i = 0; i < boardHeight; i++) {
        for (let j = 0; j < rowWidth; j++) {
            if (!visited[i][j]) {
                if (board[i][j] == 'X') {
                    // check which ship it is
                    // vertical or horizontal.

                    visited[i][j] = true;
                    ships++;

                    // handles horizontal ship.
                    if (j + 1 < rowWidth && board[i][j + 1] == 'X') {
                        let k = j + 1;
                        while (k < boardHeight) {
                            if (board[i][k] == 'X') {
                                visited[i][k] = true;
                            }
                            k++;
                        }
                    }
                    // handles vertical ship.
                    else if (i + 1 < boardHeight && board[i + 1][j] == 'X') {
                        let k = i + 1;
                        while (k < boardHeight) {
                            if (board[k][j] == 'X') {
                                visited[k][j] = true;
                            }
                            k++;
                        }
                    }

                }
            }
        }
    }

    return ships;

};

console.log(countBattleships([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]));