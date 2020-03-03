function logic(val1,val2,operator){
    if(operator=='+')return val1+val2;
        else 
    if(operator=='-')return val1-val2;
        else
    if(operator=='*')return val1*val2;
        else
    if(operator=='/')return val1/val2;
}
module.exports.logic=logic