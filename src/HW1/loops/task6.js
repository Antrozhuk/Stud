//Вывести число которое являеться зеркальным отображением последовательности цифр заданного числа
'use strict'
function reverse(n){
    let ind=0,sum=0;
    n=Math.abs(n); 
    for(let i=n;;)
    {
        if(i<10)break;
        else
        {
            i/=10;
            ind++;
        }
    }
    for(let i=0;i<=ind;i++)
    {
        sum+=(n%10)*(10**(ind-i));
        n=Math.trunc(n/10);
    }
    return sum
}
describe("task6",function(){
    it("передаем 123, ожидаем 321",function(){
        assert.equal(reverse(123),321)
    })
    it("передаем 102030, ожидаем 30201",function(){
        assert.equal(reverse(102030),30201)
    })
})