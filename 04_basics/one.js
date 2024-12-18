/*======================Control Flow===================== */
var temp = 40
// if(temp < 50){
//     console.log(`less than 50`)
// }
// else{
//     console.log(`greater than 50`)
// }
// console.log(`execute`)
// const score  = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }
// console.log(`user power : ${power}`)


/*==================== multiple condition ====================*/
const userloggedIn =  true
const debitcard =  true
const loggedinfromGoogle =  true
const loggedinfromEmail = false

if(loggedinfromEmail && loggedinfromGoogle){
    console.log(`user purchase courses`)
}