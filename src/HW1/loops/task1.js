//найти сумму четных чисел и их количество в диапазоне от 1 до 99
'use strict'
let sum=0,amount=0;
for(let i=1;i<100;i++)
{
    if(i%2==0)
    {
        sum+=i;
        amount++;
    }
}
console.log(`Сумма четных чисел: ${sum}. Их количество: ${amount}`);