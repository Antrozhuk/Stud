//посчитать сумму цифр заданного числа
'use strict'
function sumNum(n){
    let sum=0
    for(;;)
    {
        sum+=n%10;
        n=Math.trunc(n/10);
        if(Math.trunc(n)<1) break;
    }
    return sum;
}
describe("task5",function(){
    it("передаем 123, ожидаем 6", function(){
        assert.equal(sumNum(123),6)
    })
    it("передаем 102030, ожидаем 6", function(){
        assert.equal(sumNum(102030),6)
    })
})