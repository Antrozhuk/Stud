'use strict'
function reverse(arr){
    function ind(size){
        if (size%2)return (size-1)/2
        else return size/2
    }
    for(let i=0;i<ind(arr.length);i++){
        let a=arr[i]
        arr[i]=arr[arr.length-(i+1)]
        arr[arr.length-(i+1)]=a
    }
    return arr
}
describe("task6",function(){
    it("[1,3,5,1]=>[1,5,3,1]",function(){
        assert.deepEqual(reverse([1,3,5,1]),[1,5,3,1])
    })
    it("[12,45,78]=>[78,45,12]",function(){
        assert.deepEqual(reverse([12,45,78]),[78,45,12])
    })
})