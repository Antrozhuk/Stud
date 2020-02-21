////////////////////////////
//This
//ссылка на объект
///////////////////////////
function foo(){
    this.value=5
} 
foo()
var myObject=new foo()
console.log(myObject)
/////////////////////////////
var myObject1={
    myself:function(){
        return this;
    }
}
console.log(myObject1.myself()===myObject1)
//////////////////////////////
//Arrays
//////////////////////////////
var elements=new Array(1,2,3,4,5)
var el=new Array(43)
console.log(elements)
console.log(el)
//methods
//////////////////////
// pop()
// push()
// shift()
// unshift()
let values=[3,5]
values.push(4);
values.unshift(8)
console.log(values)
//
/////////////////////////////////////
console.log(values.find(element=>element<4))
console.log(values.findIndex(element=>element<4))
console.log(values.includes(8))
console.log(values.indexOf(5))
//
//////////////////////////////////////
let words=[1,2,3,4,5,6,7,8,9]
console.log(words.filter(word=>word%2))
console.log(words.map(word=>word+3))
//
//////////////////////
let a=[1,2,3,4,5].reduce(()=>{})
//
//////////////////////
let b=[1,2,[3,4,[5,6,[7,8,[9,10]]]]]
console.log(b.flat())
console.log(b.flat(2))
console.log(b.flat(3))
console.log(b.flat(4))
//////////////////////
//Objects
//////////////////////
var Object1=new Object();
var Object2={}
//конструктор
///////////////
var Human=function(name){
    this.name=name;
}
Human.prototype.anyMethod=function(){
    console.log(this.name+"do sth...")
}
var man=new Human('Sange')
var woman=new Human('Yasha')
console.log(man.name,'and',woman.name)
//
////////////////
console.log(man.constructor)
console.log(Human.prototype.constructor)
console.log(Human.prototype)
console.log(man.__proto__)
//
//////////////
var Developer=function(name, skils){
    Human.apply(this,arguments);
    this.skils=skils||[];
}
Developer.prototype=Object.create(Human.prototype)
Developer.prototype.constructor=Developer
var developer=new Developer('Anton',['JS','CSS','HTML'])
console.log(developer.name)
console.log(developer.skils)
//
////////////////////////////
//List.ArrayList
////////////////////////////
