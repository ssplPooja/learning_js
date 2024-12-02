const user = {
    itemName : "vegetables",
    price: 600,

    welcomeMessage: function(){
        console.log(`${this.itemName} , welcome to website`) // this keyword reffer to current context
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.itemName = "earphone"
// user.welcomeMessage()

// console.log(this)


// const chai = function (){
//     const username = "pooja"
//     console.log(this.username) // we can't use this keyword in function, only we can access it in object
// }

// const chai = () => {
//     const username = "pooja"
//     console.log(this) // we can't use this keyword in function, only we can access it in object
// }

// chai()


// const chai = (val1, val2) => { // when we use curly braces then we should to use return keyword 
//     return val1 + val2  /*=============explicit return========== */
// }
 
// const chai = (val1, val2) => val1 + val2  /*==========implicit return============ */

// const chai = (val1, val2) => (val1 + val2) // here if we use paranthesis then we dont't need to write or use return keyword

const chai = (val1, val2) => ({username: "pooja"}) /*====================when we create an object then we should to wrap object in paranthesis */

console.log(chai())