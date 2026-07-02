// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
type CardType = {
    cardSuit:string,
    value:string| number,
    color:string

}
let cardArray: CardType[] = [];
for(let i=0; i<5; i++){
    cardArray.push({cardSuit:'spade',value: i+6,color:'black'});
}
let jackSpade:CardType={cardSuit:'spade',value:'Jack',color:'black'}
let queenSpade:CardType={cardSuit:'spade',value:'Queen',color:'black'}
let kingSpade:CardType={cardSuit:'spade',value:'King',color:'black'}
let aceSpade:CardType={cardSuit:'spade',value:'Ace',color:'black'}
cardArray.push(jackSpade,queenSpade,kingSpade,aceSpade);


for(let i=0; i<5; i++){
    cardArray.push({cardSuit:'clubs',value:i+6,color:'black'});
}
let jackClubs:CardType={cardSuit:'clubs',value:'Jack',color:'black'}
let queenClubs:CardType={cardSuit:'clubs',value:'Queen',color:'black'}
let kingClubs:CardType={cardSuit:'clubs',value:'King',color:'black'}
let aceClubs:CardType={cardSuit:'clubs',value:'Ace',color:'black'}
cardArray.push(jackClubs,queenClubs,kingClubs,aceClubs);


for(let i=0; i<5; i++){
    cardArray.push({cardSuit:'diamond',value:i+6,color:'red'});
}
let jackDiamond:CardType={cardSuit:'diamond',value:'Jack',color:'red'}
let queenDiamond:CardType={cardSuit:'diamond',value:'Queen',color:'red'}
let kingDiamond:CardType={cardSuit:'diamond',value:'King',color:'red'}
let aseDiamond:CardType={cardSuit:'diamond',value:'Ace',color:'red'}
cardArray.push(jackDiamond,queenDiamond,kingDiamond,aseDiamond);


for(let i=0; i<5; i++){
    cardArray.push({cardSuit:'heart',value:i+6,color:'red'});
}
let jackHeart:CardType={cardSuit:'heart',value:'Jack',color:'red'}
let queenHeart:CardType={cardSuit:'heart',value:'Queen',color:'red'}
let kingHeart:CardType={cardSuit:'heart',value:'King',color:'red'}
let aseHeart:CardType={cardSuit:'heart',value:'Ace',color:'red'}
cardArray.push(jackHeart,queenHeart,kingHeart,aseHeart);

console.log(cardArray);

let aceSp:CardType | undefined =cardArray.find(cardArray=>cardArray.cardSuit==='spade' && cardArray.value==='Ace');
console.log(aceSp);

let six :CardType[]= cardArray.filter(cardArray=>cardArray.value === 6);
console.log(six)

let read:CardType[]=cardArray.filter(cardArray=>cardArray.color==='red');
console.log(read);

let ollDia:CardType[]=cardArray.filter(cardArray=>cardArray.cardSuit==='diamond');
console.log(ollDia)






