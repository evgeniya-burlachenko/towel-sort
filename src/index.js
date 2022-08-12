
// You should implement your task here.

module.exports = function towelSort(matrix) {
	console.log("matrix", matrix)
	let temp = [];
    if (matrix) {
        matrix.forEach((indexArray, index) => {
            if (index % 2) {
                indexArray.reverse();
            }
            temp = temp.concat(indexArray);
        });
    }
    return temp;

}


