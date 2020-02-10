//Посчитать выражение макс(a*b*c, a+b+c)+3
'use strict'
let a,b,c;
a = +prompt('Введите a:','');
b = +prompt('Введите b:','');
c = +prompt('Введите c:','');
if(a*b*c>a+b+c) alert(`max(${a*b*c},${a+b+c})+3=`+(a*b*c+3))
else alert(`max(${a*b*c},${a+b+c})+3=`+(a+b+c+3));