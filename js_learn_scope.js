// based on https://www.youtube.com/watch?v=c0mLRpw-9rI

// CALL & APPLY
// with call(...) you can apply to object's "this" some other "this"

var student = {
    firstName: "John",
    lastName: "Willson"
};

var combine = function(){
   return this.firstName + " " + this.lastName;  
}
console.log(combine()); // will not work, since firstName and lastName isn't in this scope
console.log(combine.call(student));// will return - John Willson


// .call() also accept parameters to be passed to the function
var plusNumber = function(numToAdd){
    return numToAdd + this.money;
}

var balance = {money: 999};

console.log(plusNumber.call(balance, 1));// 1000


// .apply is the same thing as .call, but accept an array
//console.log(plusNumber.apply(balance, [3]));
var addToBalance = function(num1, num2, num3, num4, num5){
    return this.money + num1 + num2 + num3 + num4 + num5;
}
var someNums = [1, 10, 5, 2, 3, 1111];
console.log(addToBalance.apply(balance, someNums));// 1020
// be carefull, you need to specify that number of elements in array that is in method parameters expected(or more - since noone cares about them)


// BIND
var deposit = addToBalance.bind(balance);
console.dir(deposit);
console.log(deposit(1,10,5,2,3)); // still 1020
