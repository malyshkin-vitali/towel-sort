module.exports = function towelSort (matrix=[]) {

  for (let x = 1; x < matrix.length; x = x + 2) {
    matrix[x] = matrix[x].reverse();
  }
   return matrix.flat(); 
}
