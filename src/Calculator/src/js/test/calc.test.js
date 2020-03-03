const { logic } = require('../logic');
describe("проверка логики калькулятора",
    function(){
        it("2+2 expected 4",function(){
            assert.equal(logic(2,2,'+'),4)
        });
        it("-2-2 expected -4",function(){
            assert.equal(logic(-2,-2,'+'),-4)
        });
        it("6.3-2.8 expected 3.5",function(){
            assert.equal(logic(6.3,2.8,'-'),3.5)
        });
        it("5-(-5) expected 10",function(){
            assert.equal(logic(5,-5,'-'),10)
        });
        it("7*2 expected 14",function(){
            assert.equal(logic(7,2,'*'),14)
        });
        it("7*-2 expected -14",function(){
            assert.equal(logic(7,-2,'*'),-14)
        });
        it("1/0 expected infinity",function(){
            assert.equal(logic(1,0,'/'),Infinity)
        });
        it("10/0.1 expected 100",function(){
            assert.equal(logic(10,0.1,'/'),100)
        });
        it("2+.2 expected 2.2",function(){
            assert.equal(logic(2,.2,'+'),2.2)
        });
    });