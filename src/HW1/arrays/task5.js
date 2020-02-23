'use strict'

function sumNotChet(arr){
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        if(i%2!=0)sum+=arr[i];// сумма элементов с нечетными индексами
    }
    return sum;
}
describe("task5",function(){
    it("[4,7,9,7,3,5,9,4]=>23",function(){
        assert.equal(sumNotChet([4,7,9,7,3,5,9,4]),23)
    })
    it("[-4,-7,-9,7,3,5,0,14]=>19",function(){
        assert.equal(sumNotChet([-4,-7,-9,7,3,5,0,14]),19)
    })
})