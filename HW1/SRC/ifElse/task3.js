//Найти суммы только положительных из трех чисел
'use strict'
let x1=1,x2=1,x3=1,sum=0,dodatni="";
if(x1>0)
{
    sum+=x1;
    dodatni+=" первое"
}
if(x2>0)
{
    sum+=x2;
    dodatni+=" второе"
}
if(x3>0)
{
    sum+=x3;
    dodatni+=" третье"
}
if(sum>0)    console.log(`Положительные числа: ${dodatni}. Их сумма равна ${sum.toFixed(5)}`)
else      console.log("Положительных чисел нет")