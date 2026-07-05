"use strict";
let cardArray = [];
for (let i = 0; i < 5; i++) {
    cardArray.push({ cardSuit: 'spade', value: i + 6, color: 'black' });
}
let jackSpade = { cardSuit: 'spade', value: 'Jack', color: 'black' };
let queenSpade = { cardSuit: 'spade', value: 'Queen', color: 'black' };
let kingSpade = { cardSuit: 'spade', value: 'King', color: 'black' };
let aceSpade = { cardSuit: 'spade', value: 'Ace', color: 'black' };
cardArray.push(jackSpade, queenSpade, kingSpade, aceSpade);
for (let i = 0; i < 5; i++) {
    cardArray.push({ cardSuit: 'clubs', value: i + 6, color: 'black' });
}
let jackClubs = { cardSuit: 'clubs', value: 'Jack', color: 'black' };
let queenClubs = { cardSuit: 'clubs', value: 'Queen', color: 'black' };
let kingClubs = { cardSuit: 'clubs', value: 'King', color: 'black' };
let aceClubs = { cardSuit: 'clubs', value: 'Ace', color: 'black' };
cardArray.push(jackClubs, queenClubs, kingClubs, aceClubs);
for (let i = 0; i < 5; i++) {
    cardArray.push({ cardSuit: 'diamond', value: i + 6, color: 'red' });
}
let jackDiamond = { cardSuit: 'diamond', value: 'Jack', color: 'red' };
let queenDiamond = { cardSuit: 'diamond', value: 'Queen', color: 'red' };
let kingDiamond = { cardSuit: 'diamond', value: 'King', color: 'red' };
let aseDiamond = { cardSuit: 'diamond', value: 'Ace', color: 'red' };
cardArray.push(jackDiamond, queenDiamond, kingDiamond, aseDiamond);
for (let i = 0; i < 5; i++) {
    cardArray.push({ cardSuit: 'heart', value: i + 6, color: 'red' });
}
let jackHeart = { cardSuit: 'heart', value: 'Jack', color: 'red' };
let queenHeart = { cardSuit: 'heart', value: 'Queen', color: 'red' };
let kingHeart = { cardSuit: 'heart', value: 'King', color: 'red' };
let aseHeart = { cardSuit: 'heart', value: 'Ace', color: 'red' };
cardArray.push(jackHeart, queenHeart, kingHeart, aseHeart);
console.log(cardArray);
let aceSp = cardArray.find(cardArray => cardArray.cardSuit === 'spade' && cardArray.value === 'Ace');
console.log(aceSp);
let six = cardArray.filter(cardArray => cardArray.value === 6);
console.log(six);
let read = cardArray.filter(cardArray => cardArray.color === 'red');
console.log(read);
let ollDia = cardArray.filter(cardArray => cardArray.cardSuit === 'diamond');
console.log(ollDia);
