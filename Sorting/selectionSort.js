function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    } return arr
} console.log(selectionSort([4, 2, 9, 1, 6, 8]))

function myPow(x, n) {

    if (n == 0) return 1;
    let result;

    res = Math.abs(n)

    if (n % 2 == 0) {

        result = myPow(x * x, res / 2)


    } else {

        result = myPow(x * x, (res - 1) / 2) * x
    }
    if (n < 0) {
        return 1 / result
    }
    return result


}
console.log(myPow(2, -2))

//validsudoku.

function validSudoku(board) {

    let foo = new Map()
    for (let i = 0; i < 9; i++) {


        for (let j = 0; j < 9; j++) {

            if (board[i][j] !== ".") {


                let value = board[i][j]
                let box = (Math.floor(i / 3) * 3 + Math.floor(j / 3))

                let str1 = 'row' + i + value
                let str2 = 'col' + j + value
                let str3 = "box" + box + value

                if (foo.has(str1) || foo.has(str2) || foo.has(str3)) return false

                foo.set(str1)
                foo.set(str2)
                foo.set(str3)


            }
        }
    } return true
}
console.log(validSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))




