//Вычеслить факториал числа n
'use strict'
let n=10,factorial=1;
for(let i=2;i<=n;i++) factorial*=i;
console.log(`${n}!=`+factorial);