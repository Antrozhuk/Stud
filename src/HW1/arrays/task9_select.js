'use strict'
function select(arr){
for(let j=0;j<arr.length;j++)
{
    let min=arr[j],i=j,k=j;
    for(i;i<arr.length;i++)
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
return arr
}
describe("selectsort",function(){
    it("[1,3,5,1]=>[1,1,3,5]",function(){
        assert.deepEqual(select([1,3,5,1]),[1,1,3,5])
    })
    it("[45,12,78]=>[12,45,78]",function(){
        assert.deepEqual(select([45,12,78]),[12,45,78])
    })
    it("[6,7,8,3,4,5,7,4,6,9,8,32,5,1]=>[1,3,4,4,5,5,6,6,7,7,8,8,9,32]",function(){
        assert.deepEqual(select([6,7,8,3,4,5,7,4,6,9,8,32,5,1]),[1,3,4,4,5,5,6,6,7,7,8,8,9,32])
    })
})

