'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Additon, deletion, copy

// push: add an item to the end
fruits.push('π','π');
console.log(fruits);
// pop: remove an item from end
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('π');
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push
console.log(`--------------------`);
// splice: remove an item by index position
fruits.splice(1, 1);
//μνλ κ°μλ₯Ό μ§μ νμ§ μμΌλ©΄ μ§μ ν indexλΆν° λ€ μ§μλ²λ¦°λ€
console.log(fruits);

fruits.splice(1, 1, 'π','π');
console.log(fruits);

// combine two arrays 
const fruits2 = ['π₯','π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('π'));

// includes
console.log(fruits.includes('π'));

// lastIndexOf
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));