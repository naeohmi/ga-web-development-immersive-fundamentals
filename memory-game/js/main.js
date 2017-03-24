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
        cType: this.getAttribute('info'), //card type(class) = one of the 5 different type choices, doesn't change
        cId: this.getAttribute('id') //card ID(id) = unique random number for each individual card, does change each refresh 
    };
    game.cardsPlay.push(cardInfo);
    console.log(this.getAttribute('info'));
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
        //game.cardsPlay[0].innerHTML = '<img src="images/match.png">';
        //game.cardsPlay[1].innerHTML = '<img src="images/match.png">';
    } 
};

var addScore = document.getElementById('score');

var match = function(c0, c1) {
    var c0 = game.cardsPlay[0];
    var c1 = game.cardsPlay[1];
    if ((c0.cType === "mountain" && c1.cType === "mountain") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
        return true; 
    } else if ((c0.cType === "river" && c1.cType === "river") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
        return true;
    } else if ((c0.cType === "desert" && c1.cType === "desert") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
        return true;
    } else if ((c0.cType === "sunset" && c1.cType === "sunset") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
        return true;
    } else if ((c0.cType === "iceberg" && c1.cType === "iceberg") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
        return true;
    } else if ((c0.cType === "beach" && c1.cType === "beach") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score++;
        addScore.innerHTML = game.score;
        return true;
    } else {
        console.log('bummersville');
        return false;
//        setTimeout(function() { //another flipping idea, not working yet
//            console.log('nope');
//            c0.innerHTML = '';
//            c0.innerHTML = '<img src="images/front.png">';
//            c1.innerHTML = '';
//            game.cardsPlay = [];
//        }, 100);
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