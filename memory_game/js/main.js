console.log("Up and Running!");

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];

function checkForMatch() {
	
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
		winScore += 1
		document.getElementById('wins').innerHTML = "Wins: " + winScore;
	} else {
		alert("Sorry, try again")
		lossScore += 1
		document.getElementById('losses').innerHTML = "Losses: " + lossScore;
	}

};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


function flipCard () {
	
	let cardId = this.getAttribute('data-id');
	console.log("Use flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
}

function resetgame() {
	cardsInPlay = [];
	let cardElements = document.getElementsByTagName('img');
	for (i = 0; i < cardElements.length; i++) {
		cardElements[i].setAttribute('src', 'images/back.png');
	}

}

createBoard();

let reset = document.getElementById('button');
reset.addEventListener('click', resetgame);

let winScore = 0
let lossScore = 0
