'use strict'
let n=5;
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
console.log("Массив: ",arr);
for(let j=0;j<n;j++)
{
    for(let i=0;i<n-j;i++)
    {
        if(arr[i]>arr[i+1])
        {
            let a=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=a;
        }
    }
}
console.log(arr);

