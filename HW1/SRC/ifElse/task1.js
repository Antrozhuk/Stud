//Если a - четное посчитать a*b, иначе a+b
'use strict'
function chetnost(a,b){
if(a % 2 ) return(a+b);
return(a*b);}
describe('task1 ',function(){
    it("передаем a=5, b=10; ожидаем 15", function() 
      {
        assert.equal(chetnost(5,10), 15);
      });
    it("передаем a=6, b=10; ожидаем 60", function() 
      {
        assert.equal(chetnost(6,10), 60);
      });
})
