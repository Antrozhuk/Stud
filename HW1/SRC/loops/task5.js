//посчитать сумму цифр заданного числа
'use strict'
let n=234,sum=0,a=n;
for(;;)
{
    sum+=n%10;
    n=Math.trunc(n/10);
    if(Math.trunc(n)<1) break;
}
console.log(`Сумма цифр числа ${a} равна `,sum);