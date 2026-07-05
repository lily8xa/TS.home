"use strict";
// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.
let newBlock = document.createElement('div');
let text = document.createElement('h1');
text.innerText = 'Some text here';
text.classList.add('text-style');
newBlock.classList.add('wrap');
newBlock.classList.add('collapse');
newBlock.classList.add('alpha');
newBlock.classList.add('beta');
newBlock.appendChild(text);
let copyBlock = newBlock.cloneNode(true);
document.body.append(newBlock, copyBlock);
