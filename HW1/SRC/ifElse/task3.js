//Найти суммы только положительных из трех чисел
'use strict'
function dodatni(x1,x2,x3){
    let sum=0;
if(x1>0)
    sum+=x1;
if(x2>0)
    sum+=x2;
if(x3>0)
    sum+=x3;
return sum;
}
// if(sum>0)    console.log(`Положительные числа: ${dodatni}. Их сумма равна ${sum}`)
// else      console.log("Положительных чисел нет")
describe('task3 ',function(){
    it("передаем a=5, b=-1, c=2; ожидаем 7", function() 
      {
        assert.equal(dodatni(5,-1,2), 7);
      });
    it("передаем a=-6, b=1, c=2; ожидаем 3", function() 
      {
        assert.equal(dodatni(-6,1,2), 3);
      });
    it("передаем a=-6, b=-1, c=-2; ожидаем 0", function() 
      {
        assert.equal(dodatni(-6,-1,-2), 0);
      });
})
