'use strict'
function NumbString(value){
    let a=value%10,b=value%100,c=Math.trunc(value/100),
    A1 = ['один ', 'два ', 'три ', 'четыре ', 'пять ', 'шесть ', 'семь ', 'восемь ', 'девять '],
    A2 = ['одиннадцать ', 'двенадцать ', 'тринадцать ', 'четырнадцать ', 'пятнадцать ',
        'шестнадцать ', 'семнадцать ', 'восемнадцать ', 'девятнадцать '],
    A3 = ['десять ', 'двадцать ', 'тридцать ', 'сорок ', 'пятьдесят ',
        'шестьдесят ', 'семьдесят ', 'восемьдесят ', 'девяносто '],
    A4 = ['сто ', 'двести ', 'триста ', 'четыреста ', 'пятьсот ',
        'шестьсот ', 'семьсот ', 'восемьсот ', 'девятьсот '],res=' '; 
    if(value>=100)res+=A4[c-1];
   
        if(b>10 && b<20)res=res+A2[b-11];
        else if(b==10 || b>19)
        {
            res+=A3[Math.trunc(b/10)-1];
            if(a!=0)res=res+A1[a-1]; 
        }
        else if(b<10)  {if(a!=0)res=res+A1[a-1]; }     
    return res;
}
describe("task2",function(){
    it("123 => сто двадцать три",function(){
        assert.equal(NumbString(123),' сто двадцать три ')
    })
    it("45 => сорок пять",function(){
        assert.equal(NumbString(45),' сорок пять ')
    })
    it("55 => пятьсот пятьдесят пять",function(){
        assert.equal(NumbString(555),' пятьсот пятьдесят пять ')
    })
})


