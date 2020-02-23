'use strict'
//замена половин массива местами
function halfRev(arr){
if(arr.length%2==0){
    for(let i=0;i<arr.length/2;i++)
    {
        let a=arr[i];
        arr[i]=arr[i+arr.length/2];
        arr[i+arr.length/2]=a;
    }
}
else
{
    for(let i=0;i<(arr.length-1)/2;i++)
    {
        let a=arr[i];
        arr[i]=arr[i+(arr.length+1)/2];
        arr[i+(arr.length+1)/2]=a;
    }
}
return arr
}
describe("task8",function(){
    it("[1,3,5,1]=>[5,1,1,3]",function(){
        assert.deepEqual(halfRev([1,3,5,1]),[5,1,1,3])
    })
    it("[12,45,78]=>[78,45,12]",function(){
        assert.deepEqual(halfRev([12,45,78]),[78,45,12])
    })
})