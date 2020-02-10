//Найти корень натурального числа с точностью до целого
'use strict'
let n=+prompt('Введите натуральное число: ',''),i,a,b;
for(i=1;;i++) if(Math.sqrt(n)-i<1)break; //Метод последовательного подбора
for(a=0 , b=n;;) //Метод бинарного поиска
{
    if((a+b)/2>Math.trunc(Math.sqrt(n)))b=(a+b)/2
    else if((a+b)/2<Math.trunc(Math.sqrt(n)))a=(a+b)/2
    else break;
    if(n==1)
    {
        b=1.5;
        break;
    }
}
alert(`Корень числа ${n} с точностью до целого равен `+i);
alert(`Корень числа ${n} с точностью до целого равен `+(a+b)/2);