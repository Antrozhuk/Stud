function logic(val1,val2,operator){
    if(operator=='+')return val1+val2;
        else 
    if(operator=='-')return val1-val2;
        else
    if(operator=='*')return val1*val2;
        else
    if(operator=='/')return val1/val2;
}
let val1;
let val2;
let operator;
let isOperatorCliced=false;
let isDot=true;
let ac=document.getElementById('ac');
ac.addEventListener("click", delite);
function delite(){
    isDot=true;
    val1=''
    val2=''
    operator=''
    isOperatorCliced=false;
    document.getElementById('pole').value= ""
}
let divis=document.getElementById('division');
divis.addEventListener("click", division);
function division(){
    if(!isOperatorCliced){
        isDot=true;
        val1=document.getElementById('pole').value;
        operator='/'
        isOperatorCliced=true;
        document.getElementById('pole').value=val1+operator
    }
}
let multi=document.getElementById('multiplication');
multi.addEventListener("click", multiplication);
function multiplication(){
    if(!isOperatorCliced){
        isDot=true;
        val1=document.getElementById('pole').value;
        operator='*'
        isOperatorCliced=true;
        document.getElementById('pole').value=val1+operator
    }
}
let diff=document.getElementById('difference');
diff.addEventListener("click", difference);
function difference(){
    if(!isOperatorCliced){
        isDot=true;
        val1=document.getElementById('pole').value;
        operator='-'
        isOperatorCliced=true;
        document.getElementById('pole').value=val1+operator
    }
}
let suma=document.getElementById('sum');
suma.addEventListener("click", sum);
function sum(){
    if(!isOperatorCliced){
        isDot=true;
        val1=document.getElementById('pole').value;
        operator='+'
        isOperatorCliced=true;
        document.getElementById('pole').value=val1+operator
    }
}
let sqerte=document.getElementById('sqrt');
sqerte.addEventListener("click", sqrt);
function sqrt(){
    document.getElementById('pole').value=Math.sqrt(document.getElementById('pole').value);
}
let sqare=document.getElementById('square');
sqare.addEventListener("click", square);
function square(){
    document.getElementById('pole').value=
    (document.getElementById('pole').value**2);
}
let equ=document.getElementById('equal');
equ.addEventListener("click", equal);
function equal(){
    let string=document.getElementById('pole').value
    val2=+string.substring(val1.length+1,string.length);
    val1=+val1;
    if(isOperatorCliced){
        isOperatorCliced=false;
    document.getElementById('pole').value=
    logic(val1,val2,operator);
    operator=''
    }
    else alert('Виберіть операцію та введіть наступне число!')
    if((+document.getElementById('pole').value ^ 0) === +document.getElementById('pole').value)isDot=true
}
let tochka=document.getElementById('dot');
tochka.addEventListener("click", dot);
function dot(){
    if(isDot){
        document.getElementById('pole').value+= '.'
        isDot=false
    }
}
let zero=document.getElementById('nul');
zero.addEventListener("click", nul);
function nul(){
    document.getElementById('pole').value+= 0
}
let first=document.getElementById('one');
first.addEventListener("click", one);
function one(){
    document.getElementById('pole').value+= 1
}
let second=document.getElementById('two');
second.addEventListener("click", two);
function two(){
    document.getElementById('pole').value+= 2
}
let thri=document.getElementById('three');
thri.addEventListener("click", three);
function three(){
    document.getElementById('pole').value+= 3
}
let qart=document.getElementById('four');
qart.addEventListener("click", four);
function four(){
    document.getElementById('pole').value+= 4
}
let fiwe=document.getElementById('five');
fiwe.addEventListener("click", five);
function five(){
    document.getElementById('pole').value+= 5
}
let sics=document.getElementById('six');
sics.addEventListener("click", six);
function six(){
    document.getElementById('pole').value+= 6
}
let sven=document.getElementById('seven');
sven.addEventListener("click", seven);
function seven(){
    document.getElementById('pole').value+= 7
}
let eith=document.getElementById('eight');
eith.addEventListener("click", eight);
function eight(){
    document.getElementById('pole').value+= 8
}
let nine=document.getElementById('nein');
nine.addEventListener("click", nein);
function nein(){
    document.getElementById('pole').value+= 9
}