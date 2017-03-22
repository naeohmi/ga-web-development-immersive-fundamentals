var game = {
    cards: ["mountain", "beach", "river", "desert", "sunset", "iceberg"],
    rndNum: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    cardsPlay: [],
    board: document.getElementById('game-board'),
    playerScore: 0
};
var create = function () {
    for (var i = 0; i <= 14; i++) {
        var newRCard = game.cards[game.rndNum(0,5)];
        var newCard = document.createElement('div');
        newCard.className = 'card';
        //to get random card
        newCard.setAttribute('info', newRCard); 
        newCard.addEventListener('click', cardBuilder);
        game.board.appendChild(newCard);
    } 
};
var cardBuilder = function() {
    game.cardsPlay.push(this.getAttribute('info'));
//    console.log(this.getAttribute('info'));
    if (this.getAttribute('info') === 'mountain') {
        this.innerHTML = '<img src="images/mountain.png">';
    } else if (this.getAttribute('info') === 'beach'){
        this.innerHTML = '<img src="images/beach.png">';
    } else if (this.getAttribute('info') === 'river'){
        this.innerHTML = '<img src="images/river.png">';
    } else if (this.getAttribute ('info') === 'desert') {
        this.innerHTML = '<img src="images/desert.png">';
    } else if (this.getAttribute ('info') === 'sunset') {
        this.innerHTML = '<img src="images/sunset.png">';
    } else if (this.getAttribute ('info') === 'iceberg') {
        this.innerHTML = '<img src="images/ice.png">';
    }
    if (game.cardsPlay.length === 2) {
        match(game.cardsPlay[0], game.cardsPlay[1]);
        game.cardsPlay = [];
    } 
};

//var create2 = function() {
//    var newest = document.createElement('div');
//    newest.className = 'newest';
//    newest.setAttribute('more-info', newest);
//    newest.addEventListener('click', match2);
//    game.board.appendChild(newest);
//};
//
//var match2 = function() {
//    game.cardsPlay.push(this.getAttribute('more-info'));
//    console.log(newest.getAttribute('more-info'));
//    if (game.cardsPlay[0].innerHTML === game.cardsPlay[1].innerHTML) {
//        this.getAttribute('more-info') === 'match';
//        console.log('match');
//    } else {
//        this.getAttribute('more-info') === 'not-match';
//        console.log('not match');
//    } 
//};
//
//var matching = function() {
//    if (this.getAttribute('more-info') === 'match') {
//        this.innerHTML = '<img src="images/match.png">';
//        console.log('match yes');
//        game.playerScore++;
//        addScore.innerHTML = game.playerScore;
//    } else {
//        console.log('match no')
//        this.innerHTML = '<img src="images/front.png">';
//    }
//};

var addScore = document.getElementById('score');

var match = function() {
     if (game.cardsPlay[0].innerHTML === game.cardsPlay[1].innerHTML) {
         console.log('match yes');
         game.playerScore++;
         addScore.innerHTML = game.playerScore;

         game.cardsPlay.innerHTML = '<img src="images/match.png">';
     } else {
         console.log('match no');
         setTimeout(function() {
             one.innerHTML = '<img src="images/logo.png">';
             two.innerHTML = '<img src="images/logo.png">';
         }, 1000);
//        game.cardsPlay.innerHTML = '<img src="images/front.png">';
     }
};

create();
