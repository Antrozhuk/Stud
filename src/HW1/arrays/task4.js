'use strict'
function maxInd(arr){
    let MaxIndex=0;
    let max=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)//поиск индекса максимального элемента
        {
            max=arr[i];
            MaxIndex=i;
        }
    }
    return MaxIndex   
}
describe("task4",function(){
    it("[4,7,9,7,3,5,9,4]=>2",function(){
        assert.equal(maxInd([4,7,9,7,3,5,9,4]),2)
    })
    it("[-4,7,-9,7,3,5,0,4]=>1",function(){
        assert.equal(maxInd([-4,7,-9,7,3,5,0,4]),1)
    })
})