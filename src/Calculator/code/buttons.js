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
        if(document.getElementById('pole').value)
        {
            isDot=true;
            val1=document.getElementById('pole').value;
            operator='/'
            isOperatorCliced=true;
            document.getElementById('pole').value=''
        }
    }
}
let multi=document.getElementById('multiplication');
multi.addEventListener("click", multiplication);
function multiplication(){
    if(!isOperatorCliced){
        if(document.getElementById('pole').value)
        {
            isDot=true;
            val1=document.getElementById('pole').value;
            operator='*'
            isOperatorCliced=true;
            document.getElementById('pole').value=''
        }
    }
}
let diff=document.getElementById('difference');
diff.addEventListener("click", difference);
function difference(){
    if(!isOperatorCliced){
        if(!document.getElementById('pole').value)
        {
            document.getElementById('pole').value="-"
        }
        else
        {
            isDot=true;
            val1=document.getElementById('pole').value;
            operator='-'
            isOperatorCliced=true;
            document.getElementById('pole').value=''
        }
    }
}
let suma=document.getElementById('sum');
suma.addEventListener("click", sum);
function sum(){
    if(!isOperatorCliced){
        if(document.getElementById('pole').value)
        {
            isDot=true;
            val1=document.getElementById('pole').value;
            operator='+'
            isOperatorCliced=true;
            document.getElementById('pole').value=''
        }
        
    }
}
let equ=document.getElementById('equal');
equ.addEventListener("click", equal);
function equal(){
    val2=+document.getElementById('pole').value
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
const buttons = document.querySelectorAll(".number")
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        document.getElementById('pole').value+= button.value
    })
}