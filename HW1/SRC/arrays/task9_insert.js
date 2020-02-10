'use strict'
let n=+prompt('Введите размер массива','');
let arr=[];
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
for(let i=1;i<n;i++)
{
    let a=arr[i];let j=i;
    while(j>0 && arr[j-1]>a)
    {
        arr[j]=arr[j-1];
        j--;
    }
    arr[j]=a;
}
alert(arr);