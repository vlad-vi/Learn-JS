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

l('value and reference types');
l(new String('123') == 123 ); // true
l(new String('123') == '123' );//true
l('123' == new String('123')); // true
l(123 == new String('123'));  //true
// MDN:   a == 'foo'
// true as a and 'foo' are of different type and, the Object (a) is converted to String 'foo' before comparison
// PROOF:
var s = new String('abc');
l(typeof s); // object
l(s.valueOf());

l(new String('123') == new String('123') );//false, because of different references(yes, there is a refernce and primitive types in JS)

