module.exports = function solveSudoku(matrix) {
    //решение через рекурсию
    function findResult(matrix) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (matrix[row][col] === 0) { // нахожу значение с 0 и запускаю цикл подбора числа
                    for (let num = 1; num <= 9; num++) {
                        matrix[row][col] = num;   // временно ставлю число
                        if (checkRow(matrix, row, col) && checkCol(matrix, row, col) && checkBox(matrix, row, col))   // проверка всех областей
                            if (findResult(matrix))   // проверяю с новым числом следующие ячейки и в них следующие, если она проходит то отдаю тру и число записываю,
                            // если нет, то возвращаюсь назад и убираю число
                                return true;
                    }
                    matrix[row][col] = 0;
                    return false;
                }
            }
        }
        return true;
    }

    // проверяю по полосе
    function checkRow(matrix, row, col) {
        for (let i = 0; i < 9; i++) {
            if (col === i) { // пропускаем проверяемую ячейку
                continue;
            }
            if (matrix[row][col] === matrix[row][i]) { // сравниваем другие числа в ячейках циклом с нашим числом
                return false;
            }
        }
        return true;
    }

    //проверяю по колонке
    function checkCol(matrix, row, col) {
        for (let i = 0; i < 9; i++) {
            if (row === i) { // пропускаем проверяемую ячейку
                continue;
            }
            if (matrix[row][col] === matrix[i][col]) { // сравниваем другие числа в ячейках циклом с нашим числом
                return false;
            }
        }
        return true;
    }

    // проверяю по квадрату
    function checkBox(matrix, row, col) {
        let tempRow = Math.floor(row / 3) * 3; // находим начало квардата
        let tempCol = Math.floor(col / 3) * 3;

        for (let r = tempRow; r < tempRow + 3; r++) { // цикл от начала квадрата
            for (let c = tempCol; c < tempCol + 3; c++) {
                if ((r === row) && (c === col)) // пропускаем проверяемую ячейку
                    continue;
                if (matrix[r][c] === matrix[row][col]) { // сравниваем другие числа в ячейках циклом с нашим числом
                    return false;
                }
            }
        }
        return true;
    }

    findResult(matrix);
    return matrix;
}
