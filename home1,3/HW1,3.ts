
        let x:number=1;
if (x!==0){
    console.log(true);
}else{
    console.log(false);
}
const ya:number=-1
if (ya!==0){
    console.log(true);
}
else{
    console.log(false);
}
let aa:number=0;
if (aa !==0){
    console.log(true);
}
else{
    console.log(false);
}
//      let p= +prompt(`enter number -3.0.1`);
// if (p!==0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }




let time=46;
if (time>=0 && time<16){
    console.log(`1 qartal`)
}else if(time>15 && time<31){
    console.log(`2 qartal` )
}else if(time>30 && time<46){
    console.log(`3 qartal`)
}else if(time>45 && time<60)
    console.log(`4 qartal`)

let day=31;
if (day>=1 && day<=10){
    console.log(`1 dekad`)
}else if(day>10 && day<=20){
    console.log(`2 dekad`)
}else if(day>20 && day>=31){
    console.log(`3 dekad`)
}




// let busy= +prompt(`enter number day`);
// if (busy===1){
//     console.log(`Monday`)
// }
// else if (busy===2){
//     console.log(`Tuesday`)
// }
// else if(busy===3){
//     console.log(`Wednesday`)
// }
// else if (busy===4){
//     console.log(`Thursday`)
// }
// else if (busy===5){
//     console.log(`Friday`)
// }
// else if (busy===6){
//     console.log(`Saturday`)
// }
// else if (busy=7){
//     console.log(`Sunday`)
// }


let plan:string | null =prompt(`enter day number`)
        if (plan !== null){
            let NumberDay=+plan;

switch(NumberDay){
    case 1:
        console.log(`Monday`);
        break;

    case 2:
        console.log(`Tuesday`);
        break;

    case 3:
        console.log(`Wednesday`);
        break;

    case 4:
        console.log(`Thursday`);
        break;

    case 5:
        console.log(`Friday`);
        break;

    case 6:
        console.log(`Saturday`);
        break;

    case 7:
        console.log(`Sunday`);
        break;


    default:
        console.log(`false`);
}
        }

let jj=7;
let ii=3;
if(jj>ii){
    console.log(jj);
}else if(ii>jj){
    console.log(ii);
}
else if(jj===ii){
    console.log(`=`);

}

let p:number | string=NaN;
if (!p){
    p=`default`
}
console.log (p);





