const transpose = function(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      output[col] [row] = matrix[row] [col];
    }
  }
  return output;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) { return false;}
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  //console.log(verticalJoin);
  
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
