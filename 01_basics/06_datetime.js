const mydate = new Date()
// console.log(mydate)

// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())

// const newDate =  new Date(2024, 8, 23)
// const newDate =  new Date(2024, 8, 23, 5, 3)
// console.log(newDate.toLocaleDateString())
// console.log(newDate.getTime())

const myTime = Date.now()
// console.log(myTime)  get value in millisecond
// console.log(Math.floor(myTime / 1000)) get value in second without decimal using math function 


const newDate =  new Date()
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday : "long",
    day : "numeric"
}))

