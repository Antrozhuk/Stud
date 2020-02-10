//Вычеслить факториал числа n
'use strict'
let n=+prompt('Введите натуральное число: ',''),factorial=1;
for(let i=2;i<=n;i++) factorial*=i;
alert(`${n}!=`+factorial);