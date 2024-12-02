//Note:: array is collection of multiple elements, it's resizeable (means we can change array elements) also it's mix of datatypes
// array copy operation create shallow copy(heap memory)

const myArr = [0, 1, 2, 3] // here is 0, 1, 2 => elements

//Type of way to defined or write array::
const arrTwo = ["hello", "world"]
const newArr =  new Array(9, 8, 7, 6)

// console.log(newArr)

//array Method

// const myArray = [ 1, 2, 3, 4, 5,]

// myArray.push(8, 0) // add value from last
// myArray.pop() // Remove value from last
// myArray.unshift(2, 7) //add value from start
// myArray.shift()  // Remove value from start

// console.log(myArray) 
// console.log(myArray.includes(5))  // it'll give response as boolean value(true or false)
// console.log(myArray.indexOf(5))  // if there is no index value then it'll give -1 response

// const newArray = myArray.join() // join method bind the array also change the datatypes from object to string

// console.log( typeof newArray)
// console.log(newArray)
// console.log(myArray)

/*===========+++++++++=================== */
//1. SLICE 2. SPLICE
//1. Slice :: slice method gave you result from array but it'll not change the origional array
//2. Splice :: Splice method gave you result or value from array but it's also cut or remove the value from origional array

const myArray = [ 1, 2, 3, 4, 5,]
const sliceArr = myArray.slice(2, 4)
console.log(sliceArr)
console.log(myArray)

const spliceArr = myArray.splice(2, 4)
console.log(spliceArr)
console.log(myArray)