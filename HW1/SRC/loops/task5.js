//посчитать сумму цифр заданного числа
'use strict'
let n=+prompt('Введите натуральное число: ',''),sum=0,a=n;
for(;;)
{
    sum+=n%10;
    n=Math.trunc(n/10);
    if(Math.trunc(n)<1) break;
}
alert(`Сумма цифр числа ${a} равна `+sum);