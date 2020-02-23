'use strict'
function maxArr(arr){
let max=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)//поиск максимального элемента
        max=arr[i];
}
return max;
}
describe("task2",function(){
    it("[4,7,9,7,3,5,9,4]=>9",function(){
        assert.equal(maxArr([4,7,9,7,3,5,9,4]),9)
    })
    it("[-4,7,-9,17,3,5,0,4]=>17",function(){
        assert.equal(maxArr([-4,7,-9,17,3,5,0,4]),17)
    })
})