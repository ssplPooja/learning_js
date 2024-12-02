const score = 400
// console.log(score)

const scoreNew = new Number(100000)
// console.log(scoreNew)
// console.log(scoreNew.toString().length) // convert it into string and also as well get length of scoreNew
// console.log(typeof(scoreNew.toString())) //Datatype of scoreNew
// console.log(scoreNew.toFixed(2))  // after decimal 
// console.log(scoreNew.toPrecision(4))
// console.log(scoreNew.toLocaleString('en-IN')) //convert value with indian number with comma


/*++++++++++++++++++++++++++++++++============MATHS================++++++++++++++++++++++++ */
// console.log(Math.abs(-4)) // convert positive value
// console.log(Math.round(5.8)) // round of given value 
// console.log(Math.ceil(4.1)) // ceil value means top value 
// console.log(Math.floor(4.9)) // floor value means down value 
// console.log(Math.min(4, 6, 7, 3))
// console.log(Math.max(4, 6, 7, 3))

console.log(Math.random())
console.log((Math.random()) * 10)

const min = 20
const max = 40

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)))
console.log((Math.floor(Math.random() * (max - min + 1))) + min)