//Найти суммы только положительных из трех чисел
'use strict'
let x1,x2,x3,sum=0,dodatni="";
x1 = +prompt('Введите первое число:','');
x2 = +prompt('Введите второе число:','');
x3 = +prompt('Введите третье число:','');
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
if(sum>0)    alert(`Положительные числа: ${dodatni}. Их сумма равна ${sum.toFixed(5)}`)
else      alert("Положительных чисел нет")