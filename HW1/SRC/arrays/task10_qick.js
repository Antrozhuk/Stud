'use strict'
function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
function partition(arr, left, right) {
    let pivot   = arr[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let a=arr[i];
            arr[i]=arr[j];
            arr[j]=a;
            i++;
            j--;
        }
    }
    return i;
}
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
console.log("Массив: "+arr);
quickSort(arr,0,n-1);
console.log(arr);
console.log(arr);
