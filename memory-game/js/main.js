var game = {
    cards: ["mountain", "beach", "river", "desert", "sunset", "iceberg"],
    rndNum: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    cardsPlay: [], //cardsInfo pushed here
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
        newCard.setAttribute('id', "cId" + i);
        newCard.addEventListener('click', cardBuilder);
        game.board.appendChild(newCard);
    } 
};
var cardBuilder = function() {
    var cardInfo = {
        cType: this.getAttribute('info'),
        cId: this.getAttribute('id')
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
    } 
};

var addScore = document.getElementById('score');

var match = function(one, two) {
    if ((game.cardsPlay[0].cType === "mountain" && game.cardsPlay[1].cType === "mountain") && (game.cardsPlay[0].cId !== game.cardsPlay[1].cId)) {
        console.log('match');
        game.playerScore++;
        addScore.innerHTML = game.playerScore;
    } else if ((game.cardsPlay[0].cType === "river" && game.cardsPlay[1].cType === "river") && (game.cardsPlay[0].cId !== game.cardsPlay[1].cId)) {
        console.log('match');
        game.playerScore++;
        addScore.innerHTML = game.playerScore;
    } else if ((game.cardsPlay[0].cType === "desert" && game.cardsPlay[1].cType === "desert") && (game.cardsPlay[0].cId !== game.cardsPlay[1].cId)) {
        console.log('match');
        game.playerScore++;
        addScore.innerHTML = game.playerScore;
    } else if ((game.cardsPlay[0].cType === "sunset" && game.cardsPlay[1].cType === "sunset") && (game.cardsPlay[0].cId !== game.cardsPlay[1].cId)) {
        console.log('match');
        game.playerScore++;
        addScore.innerHTML = game.playerScore;
    } else if ((game.cardsPlay[0].cType === "iceberg" && game.cardsPlay[1].cType === "iceberg") && (game.cardsPlay[0].cId !== game.cardsPlay[1].cId)) {
        console.log('match');
        game.playerScore++;
        addScore.innerHTML = game.playerScore;
        //final! yay :D
        
     } else {
         console.log('bummersville');
//             one.innerHTML = '<img src="images/logo.png">';
//             two.innerHTML = '<img src="images/logo.png">';
     }
};

create();