module.exports = function solveSudoku(matrix) {
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
        if (matrix[row][col] === 0) {
            findResult(matrix, [row], [col]);
        }
    }
}
// решение
function findResult(matrix, row, col) {
    for (let num = 1; num <= 9; num++) {
        if (checkRow(matrix, row, num) && checkCol(matrix, col, num) && checkBox(matrix, row, col, num)) { // проверяю число
            matrix[row][col] =  num;
        }
    }
   // findResult(matrix, [row], [col]);
}
// проверяю по полосе
function checkRow(matrix, row, num) {
    for (let col=0; col < 9; col++) {
        if (matrix[row][col] == num) {
            return false;
        }
    }

    return true;
}
//проверяю по колонке
function checkCol(matrix, col, num) {
    for (let row=0; row < 9; row++) {
        if (matrix[row][col] == num) {
            return false;
        }
    }

    return true;
}
// проверяю по квадрату
function checkBox(matrix, row, col, num) {
    row = Math.floor(row / 3)*3;
    col = Math.floor(col / 3)*3;

    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            if (matrix[row + r][col + c] == num) {
                return false;
            }
        }
    }
    return true;
}
  return matrix;
}
