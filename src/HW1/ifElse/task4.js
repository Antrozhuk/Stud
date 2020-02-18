//Посчитать выражение макс(a*b*c, a+b+c)+3
'use strict'
function max(a,b,c){
if(a*b*c>a+b+c)return a*b*c+3; //console.log(`max(${a*b*c},${a+b+c})+3=`,(a*b*c+3))
return a+b+c+3;}
//else console.log(`max(${a*b*c},${a+b+c})+3=`,(a+b+c+3));}
describe('task4 ',function(){
    it("передаем a=5, b=-1, c=2; ожидаем 6", function() 
      {
        assert.equal(max(5,-1,2), 9);
      });
    it("передаем a=6, b=1, c=2; ожидаем 12", function() 
      {
        assert.equal(max(6,1,2), 15);
      });
    it("передаем a=1, b=1, c=2; ожидаем 7", function() 
      {
        assert.equal(max(1,1,2), 7);
      });
})