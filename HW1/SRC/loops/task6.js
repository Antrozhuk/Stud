//Вывести число которое являеться зеркальным отображением последовательности цифр заданного числа
'use strict'
let n=123,ind=0,sum=0;
n=Math.abs(n); 
for(let i=n;;)
{
    if(i<10)break;
    else
    {
        i/=10;
        ind++;
    }
}
for(let i=0;i<=ind;i++)
{
    sum+=(n%10)*(10**(ind-i));
    n=Math.trunc(n/10);
}
console.log('Зеркальное число:',sum);
