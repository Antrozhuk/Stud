//Вычеслить факториал числа n
'use strict'
function fact(n){
    let factorial=1;
    for(let i=2;i<=n;i++) factorial*=i;
    return factorial
}
describe("task4",function(){
    it("передаем 5, ожидаем 120", function(){
        assert.equal(fact(5),120)
    })
    it("передаем 10, ожидаем 3628800", function(){
        assert.equal(fact(10),3628800)
    })
})