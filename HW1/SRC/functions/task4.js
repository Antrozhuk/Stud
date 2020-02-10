'use strict'
function katet(a,b){
    return Math.abs(a-b);
}
function pifagor(a,b){
    return Math.sqrt((a**2)+(b**2));
}
let
x1=+prompt('Введите х1',''),
y1=+prompt('Введите y1',''),
x2=+prompt('Введите х2',''),
y2=+prompt('Введите y2','');
alert('Расстояние между точками равно '+pifagor(katet(x1,x2),katet(y1,y2)));