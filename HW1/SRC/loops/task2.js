//Проверить простое ли число
'use strict'
let a=+prompt('Введите натуральное число: ',''),sum=0;
for(let i=1;i<=a;i++)
{
    if(a%i==0 )
    {
        sum++;
    }
    if(sum>2)break;
}
if(sum==2) alert(`Число ${a} простое`);
else  alert(`Число ${a} не простое`);