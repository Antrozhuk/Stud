//Если a - четное посчитать a*b, иначе a+b
'use strict'
let a,b;
a = +prompt('Введите а:','');
b = +prompt('Введите b:','');
if(a % 2 == 0) alert(a * b);
else alert(a + b);