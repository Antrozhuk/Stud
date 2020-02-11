//Найти суммы только положительных из трех чисел
'use strict'
let x1=1,x2=1,x3=1,sum=0,dodatni="";
if(x1>0)
{
    sum+=x1;
    dodatni=String(x1)+' ';
}
if(x2>0)
{
    sum+=x2;
    dodatni+=String(x2)+' ';
}
if(x3>0)
{
    sum+=x3;
    dodatni+=String(x3);
}
if(sum>0)    console.log(`Положительные числа: ${dodatni}. Их сумма равна ${sum}`)
else      console.log("Положительных чисел нет")