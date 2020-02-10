'use strict'
let n=+prompt('Введите размер массива','');
let arr=[];
let min,max,MinIndex=0,MaxIndex=0,sum=0,amount=0;
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
min=arr[0];
max=arr[0];
for(let i=0;i<n;i++)
{
    
    if(arr[i]>max)//поиск максимального элемента и его индекса
    {
        max=arr[i];
        MaxIndex=i;
    }
    if(arr[i]<min)//поиск минимального элемента и его индекса
    {
        min=arr[i];
        MinIndex=i;
    }
    if(i%2!=0)sum+=arr[i];// сумма элементов с нечетными индексами
    if(arr[i]%2!=0)amount++;//количество нечетных элементов 
}
alert(`Минимальный элемент массива ${min}. Его индекс ${MinIndex}`);
alert(`Максимальный элемент массива ${max}. Его индекс ${MaxIndex}`);
alert("Сумма элементов массива с нечетными индексами "+sum);
alert("Массив в обратном порядке: "+arr.reverse());//реверс массива
alert("Количество нечетных элементов массива: "+amount);
arr.reverse();
//замена половин массива местами
if(n%2==0){
    for(let i=0;i<n/2;i++)
    {
        let a=arr[i];
        arr[i]=arr[i+n/2];
        arr[i+n/2]=a;
    }
}
else
{
    for(let i=0;i<(n-1)/2;i++)
    {
        let a=arr[i];
        arr[i]=arr[i+(n+1)/2];
        arr[i+(n+1)/2]=a;
    }
}
alert("Массив с измененным порядком: "+arr);