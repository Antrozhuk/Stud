//Проверить простое ли число
'use strict'
function simple(a){
let sum=0;
    for(let i=1;i<=a;i++)
    {
        if(a%i==0 )
        {
            sum++;
        }
        if(sum>2)break;
    }
    if(sum==2)return true
    else return false
}
describe("task2",function(){
    it("передаем 19, ожидаем true",function(){
        assert.equal(simple(19),true)
    })
    it("передаем 103, ожидаем true",function(){
        assert.equal(simple(103),true)
    })
    it("передаем 18, ожидаем false",function(){
        assert.equal(simple(18),false)
    })
    it("передаем 1, ожидаем false",function(){
        assert.equal(simple(1),false)
    })
})