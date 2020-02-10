'use strict'
let n=+prompt('Введите размер массива','');
let arr=[];
let amount=0;
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
    if(arr[i]%2!=0)amount++;//количество нечетных элементов 
}
alert("Количество нечетных элементов массива: "+amount);