'use strict'
function minArr(arr){
let min=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<min)//поиск минимального элемента
        min=arr[i];   
}
return min;
}
describe("task1",function(){
    it("[4,7,9,7,3,5,9,4]=>3",function(){
        assert.equal(minArr([4,7,9,7,3,5,9,4]),3)
    })
    it("[-4,7,-9,7,3,5,0,4]=>-9",function(){
        assert.equal(minArr([-4,7,-9,7,3,5,0,4]),-9)
    })
})