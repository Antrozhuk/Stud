//найти сумму четных чисел и их количество в диапазоне от 1 до 99
'use strict'
function sumChet(){
    let sum=0,amount=0;
    for(let i=1;i<100;i++)
    {
        if(i%2==0)
        {
            sum+=i;
            amount++;
        }
    }
    return [sum,amount]
}
describe("task1",function(){
    it("ожидаем 2450, 49",function(){
        assert.deepEqual(sumChet(),[2450,49])
    })
})