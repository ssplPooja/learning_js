/*========================= Primitve Datatypes============================= */
//Que. What's is primitive DataTypes
//Ans: It's a call by value datatypes means 

/**
 1. String
 2. Number
 3. Boolean
 4. Null
 5. Undefined
 6. Symbol
 7. Bigint
 */

/*=========================Non Primitve / Reference Datatypes============================= */
//Que. What's non-primitive datatypes 
//Ans: All refrence allocated in Memory 

/*
1. Array
2. Objects
3. Function
*/


let arr = ["hello", "bye"];
let obj = {
    name: "pooja",
    email: "pooja@gmail.com"
}



/*=========================Types of datatpes============================= */
// Note:: All non-primitve datatypes is functions
//Datatypes of Null is object
//Datatypes of Undefined is undefined
//Datatypes of symbol is symbol
//datetypes of date is object



/*====================================================MEMORY======================================== */
let firstId = "hello@gmail.com"
let secondId = firstId
secondId = "bye@gmail.com"

// console.log(secondId);
// console.log(firstId);

let userOne = {
    Id : "pooja@gmail.com",
    usrename: "pooja"
}


let userTwo = userOne

userTwo.usrename = "pooja sharma"

console.log(userOne.usrename);
console.log(userTwo.usrename)


//whenever you take something inside the stack, you will get only a copy but when you keep any value in heap then you will get refernce(original value)



