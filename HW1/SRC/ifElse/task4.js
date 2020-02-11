//Посчитать выражение макс(a*b*c, a+b+c)+3
'use strict'
let a=2,b=2,c=2;
if(a*b*c>a+b+c) console.log(`max(${a*b*c},${a+b+c})+3=`+(a*b*c+3))
else console.log(`max(${a*b*c},${a+b+c})+3=`+(a+b+c+3));