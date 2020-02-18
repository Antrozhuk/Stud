//Определить какой четверти пренадлежит точка скоординатами(x,y)
'use strict'
function dekart(x,y){
if(x>0 && y!=0)
{
    if(y>0)//console.log(`точка (${x},${y}) пренадлежит первой четверти`);
    return 1; 
    return 4;//console.log(`точка (${x},${y}) пренадлежит четвертой четверти`);
}
else if(x<0 && y!=0)
{
    if(y>0)//console.log(`точка (${x},${y}) пренадлежит второй четверти`);
    return 2;
    return 3;//else console.log(`точка (${x},${y}) пренадлежит третьей четверти`);
}
if(x==0 || y==0) return 0;//console.log(`точка (${x},${y}) не пренадлежит ни одной из четвертей`);
}
describe('task2 ',function(){
    it("передаем a=1, b=1; ожидаем 1", function() 
      {
        assert.equal(dekart(1,1), 1);
      });
    it("передаем a=-1, b=1; ожидаем 2", function() 
      {
        assert.equal(dekart(-1,1), 2);
      });
    it("передаем a=-1, b=-1; ожидаем 3", function() 
      {
        assert.equal(dekart(-1,-1), 3);
      });
    it("передаем a=1, b=-1; ожидаем 4", function() 
      {
        assert.equal(dekart(1,-1), 4);
      });
    it("передаем a=0, b=1; ожидаем 0", function() 
      {
        assert.equal(dekart(0,1), 0);
      });
      it("передаем a=1, b=0; ожидаем 0", function() 
      {
        assert.equal(dekart(1,0), 0);
      });
})