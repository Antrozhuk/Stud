'use strict'
function katet(a,b){
    return Math.abs(a-b);
}
function pifagor(a,b){
    return Math.sqrt((a**2)+(b**2));
}
describe("task4",function(){
    it("(2,1)(5,5) => 5",function(){
        assert.equal(pifagor(katet(2,5),katet(1,5)),5)
    })
    it("(0,0)(6,8) => 10",function(){
        assert.equal(pifagor(katet(6,0),katet(8,0)),10)
    })
    it("(-1,0)(0,0) => 1",function(){
        assert.equal(pifagor(katet(-1,0),katet(0,0)),1)
    })
})
