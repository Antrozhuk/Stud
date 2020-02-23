'use strict'
function minInd(arr){
    let MinIndex=0;
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)//поиск индекса минимального элемента 
        {
            min=arr[i];
            MinIndex=i;
        }   
    }
    return MinIndex;
}
describe("task3",function(){
    it("[4,7,9,7,3,5,9,4]=>4",function(){
        assert.equal(minInd([4,7,9,7,3,5,9,4]),4)
    })
    it("[-4,7,-9,7,3,5,0,4]=>2",function(){
        assert.equal(minInd([-4,7,-9,7,3,5,0,4]),2)
    })
})