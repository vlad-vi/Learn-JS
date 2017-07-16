// log 
function l(val){
    console.log(val);
}

l(3 == '3'); // true. it will try to cast '3' to the type of the 3(to number).
l('true' == true);// false: If one of the operands is Boolean, the Boolean operand is converted to 1 if it is true and +0 if it is false
l(true == 'true');// false

l(true == 1);  // true
l(true == '1');// true

l('' == false);// true
l(false == '');// true