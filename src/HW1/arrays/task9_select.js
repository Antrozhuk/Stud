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
    let min=arr[j],i=j,k=j;
    for(i;i<n;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
            k=i;
        }
    }
    arr[k]=arr[j];
    arr[j]=min;
}
console.log(arr);

