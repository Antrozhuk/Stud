'use strict'
function insert(arr){
for(let i=1;i<arr.length;i++)
{
    let a=arr[i];let j=i;
    while(j>0 && arr[j-1]>a)
    {
        arr[j]=arr[j-1];
        j--;
    }
    arr[j]=a;
}
return arr
}
describe("insertsort",function(){
    it("[1,3,5,1]=>[1,1,3,5]",function(){
        assert.deepEqual(insert([1,3,5,1]),[1,1,3,5])
    })
    it("[45,12,78]=>[12,45,78]",function(){
        assert.deepEqual(insert([45,12,78]),[12,45,78])
    })
    it("[6,7,8,3,4,5,7,4,6,9,8,32,5,1]=>[1,3,4,4,5,5,6,6,7,7,8,8,9,32]",function(){
        assert.deepEqual(insert([6,7,8,3,4,5,7,4,6,9,8,32,5,1]),[1,3,4,4,5,5,6,6,7,7,8,8,9,32])
    })
})

