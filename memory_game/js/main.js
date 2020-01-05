console.log("Up and Running!");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log(cardsInPlay[0]);
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log(cards[2]);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again")
	}

};


