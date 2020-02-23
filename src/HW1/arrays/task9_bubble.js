'use strict'
function bubble(arr){
for(let j=0;j<arr.length;j++)
{
    for(let i=0;i<arr.length-j;i++)
    {
        if(arr[i]>arr[i+1])
        {
            let a=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=a;
        }
    }
}
return arr
}
describe("bubblesort",function(){
    it("[1,3,5,1]=>[1,1,3,5]",function(){
        assert.deepEqual(bubble([1,3,5,1]),[1,1,3,5])
    })
    it("[45,12,78]=>[12,45,78]",function(){
        assert.deepEqual(bubble([45,12,78]),[12,45,78])
    })
    it("[6,7,8,3,4,5,7,4,6,9,8,32,5,1]=>[1,3,4,4,5,5,6,6,7,7,8,8,9,32]",function(){
        assert.deepEqual(bubble([6,7,8,3,4,5,7,4,6,9,8,32,5,1]),[1,3,4,4,5,5,6,6,7,7,8,8,9,32])
    })
})

