/*================basic "Filter" call back function ======================== */

const coding =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const val = coding.filter((num) => num > 4)

const newNum = []
const newVal = coding.filter((num) => {
    if(num > 4){
        return newNum.push(num)
    }
})
// console.log(val)

// console.log(newNum)


/* ================================ filter call back function with object in array ========================== */

const books = [
    { tile: "book one", genre: "fiction", publish: "1981", edition: "2004" },
    { tile: "book two", genre: "non-fiction", publish: "1961", edition: "2007" },
    { tile: "book three", genre: "non-fiction", publish: "1961", edition: "1980" },
    { tile: "book four", genre: "fiction", publish: "1921", edition: "2009" },
    { tile: "book five", genre: "non-fiction", publish: "1991", edition: "2010" },
    { tile: "book six", genre: "non-fiction", publish: "1931", edition: "2005" },
    { tile: "book seven", genre: "fiction", publish: "1986", edition: "1989" }
]

const userbooks = books.filter((bk) => bk.genre === "fiction")
const userpublishbook = books.filter((bk) => bk.edition >= 2000 && bk.genre === "fiction")

// console.log(userbooks)
// console.log(userpublishbook)

/* ================================== chaining with multiple method ==================== */
const myNumber = [1,2,3,4,5,6,7,8,9,10]

const addNum = myNumber
                .map((num) => num * 10)
                .map((num) => num - 1)
                .filter((num) => num >= 30) // we can add or apply multiple methos on same time

// console.log(addNum)

/* =============================== Reduce Method ============================ */
const myArray = [0, 1, 2, 3]

const total = myArray.reduce(function (acc, currval){
    // console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
})

// console.log(total)

const course = [
    {itemname: "charger", price: 2999},
    {itemname: "mobile", price: 15000},
    {itemname: "adapter", price: 1500},
    {itemname: "laptop", price: 40000},
]

const result = course.reduce((acc, item) => {
    console.log(`acc: ${acc} and item: ${item.price}`)
    return acc + item.price
}, 3)

console.log(result)