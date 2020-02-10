'use strict'
let n=+prompt('Введите размер массива','');
let arr=[];
let sum=0;
function randomInteger(min, max) 
{
    let rand=min-0.5+Math.random()*(max-min+1);
    return Math.round(rand);
}
for(let i=0;i<n;i++) //автозаполнение массива
{
   arr[i]=randomInteger(1,100);
}
alert("Массив: "+arr);
for(let i=0;i<n;i++)
{
    if(i%2!=0)sum+=arr[i];// сумма элементов с нечетными индексами
}
alert("Сумма элементов массива с нечетными индексами "+sum);