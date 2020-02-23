'use strict'
function kolNotChet(arr){
let amount=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)amount++;//количество нечетных элементов 
}
return amount
}
describe("task7",function(){
    it("[1,3,5,1]=>4",function(){
        assert.equal(kolNotChet([1,3,5,1]),4)
    })
    it("[12,45,78]=>1",function(){
        assert.equal(kolNotChet([12,45,78]),1)
    })
})