// callbacks or sort of delegates

var operationOverTwoNumbers = function(num1, num2, operation){
    if (typeof operation == "function"){
        return operation(num1, num2);
    }
    
    
}

var result = operationOverTwoNumbers(3, 4, (a1, a2) =>{
   return a1 + a2;
});


console.log(result); //7


result = operationOverTwoNumbers(1, 1, (a1, a2) =>{
    return a1.toString() + a2;
});

console.log(result); // 11 //since this is a sting concatenation


function MultiplyNumbers(a1, a2){
    return a1 * a2;
}

result = operationOverTwoNumbers(3, 10, MultiplyNumbers);

console.log(result); //30