

let ArrFirst:number[]=[351,12,-15236,3,100500]
console.log(ArrFirst)

let ArrSecond:string[]=[`I`,`Love`,`you`,`Baby`,`Sting`]
console.log(ArrSecond)

let ArrThird:(string | number | boolean) []=[`I`,`Love`,`you`,100,true]
console.log(ArrThird)
let a=true
let arrFour:string[]=[]
arrFour[0]=`I`;
arrFour[1]=`Love`;
arrFour[2]=`you`;
arrFour[3]=`Baby,`;
arrFour[4]=`Really`;
console.log(arrFour)



let arrFive:(number | string)[]=[2,17,13,6,22,31,45,66,100,-18]
let i=0;
while(i<arrFive.length){
    console.log(arrFive[i])
    i++;
}
for(let i=0; i<arrFive.length; i++){
    console.log(arrFive[i]);
}

let j=1;
while(j<arrFive.length){
    {
        console.log(arrFive[j]);
    }
    j+=2;
}


for(let i=1; i<arrFive.length; i+=2){
    console.log(arrFive[i]);
}
console.log(`5parni`);


let f=0
while(f<arrFive.length) {
    const item = arrFive[f];
    if (typeof item === 'number' && item %2===0)
    {
        console.log(arrFive[f]);
    }
    f++;
}

for(let g=0; g<arrFive.length; g++){
    const item = arrFive[g];
    if (typeof item==='number' && item %2===0)
    {
        console.log(arrFive[g]);
    }
}
for(let g=0; g<arrFive.length;g++){
    let item=arrFive[g]

    if (typeof item==='number' && item %3===0){
        arrFive[g]='Okten';
        console.log(arrFive)
    }


}
arrFive.reverse();
console.log(arrFive)


while(i<arrFive.length-1){
    console.log(arrFive[i])
    i--;
}
console.log(`2reversFor`)
for(let i= arrFive.length -1; i>=0;i--){
    console.log(arrFive[i]);
}



console.log(`3reversIN`)

let arrSet:(number | string)[]=[2,17,13,6,22,31,45,66,100,-18]
let o=arrSet.length-1;
while(o>=0){
    if(o %2!==0)
    {
        console.log(arrSet[o]);

    }
    o--;
}

for(let i=arrSet.length-1; i>=0; i--)
{
    if(i%2!==0)
        console.log(arrSet[i]);
}
console.log(`4reversFor`)
let y=arrSet.length-1;
while(y>=0){
    let item=arrSet[y];
    if(typeof item==='number' && item %2===0){
        console.log(arrSet[y]);
    }
    y--;
}

for(let i=arrSet.length-1; i>=0; i--){
    let item=arrSet[i];
    if(typeof item==='number' && item %2===0)
        console.log(arrSet[i]);
}

for(let i=arrSet.length-1; i>=0; i--){
    let item=arrSet[i];
    if(typeof item==='number' && item %3===0){
        arrSet[i]=`Okten`
    }
}
console.log(arrSet);
