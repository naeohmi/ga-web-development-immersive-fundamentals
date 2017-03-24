var game = {
    cards: ["mountain", "beach", "river", "desert", "sunset", "iceberg"],
    rndNum: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    cardsPlay: [], //cardsInfo pushed here
    board: document.getElementById('game-board'),
    score: 0
};
var create = function () {
    for (var i = 0; i <= 14; i++) {
        var newRCard = game.cards[game.rndNum(0,5)];
        var newCard = document.createElement('div');
        newCard.className = 'card';
        //to get random card
        newCard.setAttribute('info', newRCard);
        newCard.setAttribute('id', 'cId' + i);
        newCard.addEventListener('click', cardBuilder);
        game.board.appendChild(newCard);
    } 
};
var cardBuilder = function() {
    var cardInfo = {
        cType: this.getAttribute('info'), //card type(class) = one of the 6 different card choices
        cId: this.getAttribute('id') //card ID(id) = unique random number for each individual card
    };
    game.cardsPlay.push(cardInfo);
    console.log(this.getAttribute('info'));

    var pic = this.getAttribute('info') 
        this.innerHTML = '<img src="images/' + pic + '.png">';
 
    if (game.cardsPlay.length === 2) {
        match(game.cardsPlay[0], game.cardsPlay[1]);
        game.cardsPlay = [];
        //game.cardsPlay[0].innerHTML = '<img src="images/match.png">';
        //game.cardsPlay[1].innerHTML = '<img src="images/match.png">';
    } 
};

var addScore = document.getElementById('score');

var match = function(c0, c1) {
    var c0 = game.cardsPlay[0];
    var c1 = game.cardsPlay[1];
    if (game.cardsPlay[0].cType === game.cardsPlay[1].cType) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
    } else {
        console.log('bummersville');
        setTimeout(function() { //another flipping idea, not working yet
            console.log('nope');

            var c = document.getElementsByClassName("card");
            for (var i = 0; i < c.length; i += 1) {
            c[i].innerHTML= "";
            }
            game.cardsPlay = [];
        }, 100);
     }
};

//I want to get the card to flip to match.png when match = true and flip back to front.png when match = false

//if (match === true) { //one idea to get cards to flip back but not working yet
//    this.innerHTML = '<img src="images/match.png">';
//} else {
//    this.innerHTML = '<img src="images/front.png">';
//}


//var flip = function() { //another idea to get cards flipping, also not working
//    for (var j = 0; j <= 14; j++) {
//        if (game.cardsPlay[j].cId === 'match') {
//            this.innerHTML = '<img src="images/match.png">';
//        } else {
//            this.innerHTML = '<img src="images/front.png">';
//        }
//    }
//};

create();