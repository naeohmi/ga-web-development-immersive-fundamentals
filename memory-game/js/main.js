var cards = ["mountain", "beach", "river", "mountain", "beach", "river"];


var cardsPlay = [];
var board = document.getElementById('game-board');

var create = function () {
    for (var i = 0; i < cards.length; i++) { 
        var newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.setAttribute('info', cards[i]);
        newCard.addEventListener('click', cardBuilder);
        //append card to board
        board.appendChild(newCard);
    }
};

var cardBuilder = function() {
    cardsPlay.push(this.getAttribute('info'));
    console.log(this.getAttribute('info'));
    if (this.getAttribute('info') === 'mountain') {
        this.innerHTML = '<img src="images/mountain.png">';
    } else if (this.getAttribute('info') === 'beach'){
        this.innerHTML = '<img src="images/beach.png">';
    } else if (this.getAttribute('info') === 'river'){
        this.innerHTML = '<img src="images/river.png">';
    }
    
    if (cardsPlay.length === 2) {
        match(cardsPlay);
        cardsPlay = [];
    }
};

var match = function(cards) {
    if (cardsPlay[0] === cardsPlay[3]) {
        alert("Niceeee, got dat mountain!");
    } else if (cardsPlay[1] === cardsPlay[4]) {
        alert("Awesome sauce! Gettin beachy!");
    } else if (cardsPlay[2] === cardsPlay[5]) {
        alert("Nailed it, beautiful river!");
    } else {
        alert("Bummer, no match.");
    }
};

create();