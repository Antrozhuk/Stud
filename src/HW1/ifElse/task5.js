//написать программу определения оценки студента по его рейтингу
'use strict'
function prepod(a){
if(a>=0 && a<=19) return 'F';//console.log("Студенту поставили F");
if(a>=20 && a<=39) return 'E';//console.log("Студенту поставили E");
if(a>=40 && a<=59) return 'D';// console.log("Студенту поставили D");
if(a>=60 && a<=74)  return 'C';//console.log("Студенту поставили C");
if(a>=75 && a<=89)  return 'B';//console.log("Студенту поставили B");
if(a>=90 && a<=100)  return 'A';//console.log("Студенту поставили A");
return ;//console.log("Студенту поставили неправильную оценку");
}
describe('task5 ',function(){
    it("передаем 10; ожидаем F", function() 
      {
        assert.equal(prepod(10), 'F');
      });
    it("передаем 25; ожидаем E", function() 
      {
        assert.equal(prepod(25), 'E');
      });
    it("передаем 45; ожидаем D", function() 
      {
        assert.equal(prepod(45), 'D');
      });
      it("передаем 65; ожидаем C", function() 
      {
        assert.equal(prepod(65), 'C');
      });
      it("передаем 85; ожидаем B", function() 
      {
        assert.equal(prepod(85), 'B');
      });
      it("передаем 95; ожидаем A", function() 
      {
        assert.equal(prepod(95), 'A');
      });
      it("передаем 101; ожидаем undefined", function() 
      {
        assert.equal(prepod(101), undefined);
      });
      it("передаем -1; ожидаем undefined", function() 
      {
        assert.equal(prepod(-1), undefined);
      });
})