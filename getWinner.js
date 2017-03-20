a || b || c
d || e || f
g || h || i


var getWinner = function() {
  if (winnerIs('x')) {
    return 'x'; //check if x has won or not
  }
  if (winnerIs('o')) { //check if o has won or not
    return 'o';
  }
  return null; //else null
}

var winnerIs = function(player) {
  return winsRowX(player) || winsColumnX(player) || winsDiagonalX(player);
} //three possible options for x to win

var winsRow = function(player) {
  return  allThreeX(player, cellValue('a'), cellValue('b'), cellValue('c')) ||
          allThreeX(player, cellValue('d'), cellValue('e'), cellValue('f')) ||
          allThreeX(player, cellValue('g'), cellValue('h'), cellValue('i')) ||
}

var winsColumn = function(player) {
  return  allThreeX(player, cellValue('a'), cellValue('b'), cellValue('c')) ||
          allThreeX(player, cellValue('d'), cellValue('e'), cellValue('f')) ||
          allThreeX(player, cellValue('g'), cellValue('h'), cellValue('i')) ||
}

var winsDiagonal = function(player) {
  return  allThreeX(player, cellValue('a'), cellValue('b'), cellValue('c')) ||
          allThreeX(player, cellValue('d'), cellValue('e'), cellValue('f')) ||
          allThreeX(player, cellValue('g'), cellValue('h'), cellValue('i')) ||
}

var allThreeX = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}


