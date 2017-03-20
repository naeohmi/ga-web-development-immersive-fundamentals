var cardM = "mountain";
var cardB = "beach";

var gameBoard = document.getElementById('game-board');

var createCards = function() {
    for (var i = 0; i < 4; i++) {
        var newCard = document.createElement('div');
        newCard.className = 'card';
        gameBoard.appendChild(newCard);
//        console.log(newCard);
    }
}

createCards();

