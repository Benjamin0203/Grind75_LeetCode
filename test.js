

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true;
  };
  for (l of horizontalJoinReverse) {
      if (l.includes(word)) return true;
  };
  //----------------------
  let vertical  = [];
  for (let i = 0; i < letters[0].length; i++) {
    let col = [];
    for (let j = 0; j < letters.length; j ++) {
      col.push(letters[j][i]);
    }
    vertical.push(col);
  } 
  //----------------------
  const verticalJoin = vertical.map(el => el.join(''));
  const verticalJoinReverse = vertical.map(el => el.reverse().join(''));
  for (i of (verticalJoin)) {
    if (i.includes(word) ) return true
  }
  for (i of (verticalJoinReverse)) {
    if (i.includes(word) ) return true
  }

  return false;
}

const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'LAUQFCWA');   


console.log(result); // => false


const result1 = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD');

console.log(result1); // => true
module.exports = wordSearch