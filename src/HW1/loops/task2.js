//Проверить простое ли число
'use strict'
let a=19,sum=0;
for(let i=1;i<=a;i++)
{
    if(a%i==0 )
    {
        sum++;
    }
    if(sum>2)break;
}
if(sum==2) console.log(`Число ${a} простое`);
else  console.log(`Число ${a} не простое`);