var game = {
    cards: ["mountain", "beach", "river", "desert", "sunset", "iceberg"],
    rndNum: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    cardsPlay: [], //cardsdata-card pushed here
    board: document.getElementById('game-board'),
    score: 0,
    w: false
}; 
//creates cards as a div class a class of card a data-card of the name of the card type
//and unique ID for each randomly generated card
var create = function () {
    for (var i = 0; i <= 20; i++) {
        var newRCard = game.cards[game.rndNum(0,5)];
        var newCard = document.createElement('div');
        newCard.className = 'card';
        //to get random card
        newCard.setAttribute('data-card', newRCard);
        newCard.setAttribute('id', 'cId' + i);
        newCard.addEventListener('click', cardBuilder);
        game.board.appendChild(newCard);
    }
    //sets up the timer at one minute
    if (document.body.contains(document.querySelector("#timer"))) {
        var timer = {}; //timer object
        timer.length = 1 * 60 * 1000; //min, sec, milsec
        timer.count = function () {
            var minutes = Math.floor(timer.length / (60 * 1000));
            var seconds = (timer.length / 1000) - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            } //when timer runs out, clear the screen with score
            if (timer.length <= 0) {
                document.querySelector("game-board").innerHTML =
                "<h1 class='timer-out'>Game Time Over!</h1> <h2 class='final-score'>Final Score:<span></h2>";
                clearInterval(timer.countInt);
            }
            timer.length -=1000;
            document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
        }
        timer.countInt = setInterval(timer.count, 1000);
    }
};
var cardBuilder = function() {
    var carddata-card = {
        cType: this.getAttribute('data-card'), //card type(class) = one of the 6 different card choices
        cId: this.getAttribute('id') //card ID(id) = unique random number for each individual card
    };
    game.cardsPlay.push(carddata-card);
    console.log(this.getAttribute('data-card'));

    if (this.getAttribute('data-card') === 'mountain') {
        this.innerHTML = '<img src="images/mountain.png">';
    } else if (this.getAttribute('data-card') === 'beach'){
        this.innerHTML = '<img src="images/beach.png">';
    } else if (this.getAttribute('data-card') === 'river'){
        this.innerHTML = '<img src="images/river.png">';
    } else if (this.getAttribute ('data-card') === 'desert') {
        this.innerHTML = '<img src="images/desert.png">';
    } else if (this.getAttribute ('data-card') === 'sunset') {
        this.innerHTML = '<img src="images/sunset.png">';
    } else if (this.getAttribute ('data-card') === 'iceberg') {
        this.innerHTML = '<img src="images/ice.png">';
    }

    if (game.cardsPlay.length === 2) {
        match(game.cardsPlay[0], game.cardsPlay[1]);
        game.cardsPlay = [];
    } 
};
var match = function() {
    var c0 = game.cardsPlay[0];
    var c1 = game.cardsPlay[1];
  
    var zero = document.getElementById(c0.cId);
    var one = document.getElementById(c1.cId);
    game.w = false;
    if ((c0.cType === "mountain" && c1.cType === "mountain") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score+=2;
        addScore.innerHTML = game.score;
        game.w = true;
    } else if ((c0.cType === "river" && c1.cType === "river") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score+=2;
        addScore.innerHTML = game.score;
        game.w = true;
    } else if ((c0.cType === "desert" && c1.cType === "desert") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score+=2;
        addScore.innerHTML = game.score;
        game.w = true;
    } else if ((c0.cType === "sunset" && c1.cType === "sunset") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score+=2;
        addScore.innerHTML = game.score;
        game.w = true;
    } else if ((c0.cType === "iceberg" && c1.cType === "iceberg") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score+=2;
        addScore.innerHTML = game.score;
        game.w = true;
    } else if ((c0.cType === "beach" && c1.cType === "beach") && (c0.cId !== c1.cId)) {
        console.log('match');
        game.score+=2;
        addScore.innerHTML = game.score;
        game.w = true;

    } else {
        console.log('nah');
        game.w = false;
        game.score--;
        addScore.innerHTML = game.score;
    }
    won(one, zero);
};
var addScore = document.getElementById('score');
var won = function(one, zero) {
    console.log(game.w);
    if (game.w == true) {
        setTimeout(function() {
            console.log("yay");
            one.innerHTML =  '<img src="images/match.png">';
            zero.innerHTML = '<img src="images/match.png">';
        }, 700);
        one.removeEventListener('click', cardBuilder);
        zero.removeEventListener('click', cardBuilder);
    } else {
        console.log('not-match');
        game.w = false;
        setTimeout(function() {
            one.innerHTML = '';
            zero.innerHTML = '';
        }, 500);
        
    }
};

create();
