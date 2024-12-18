const coding =  ["java", "python", "c++", "ruby"]

coding.forEach( function (val) {
    // console.log(val)
})


/*==================array Function================= */

coding.forEach( (item) => {
    // console.log(item)
})


/*=======================multiple value =================== */

coding.forEach( (n, index, arr) => {
    // console.log(n, index, arr)
})


/*====================array function with object in array ==================== */
const myCoding = [
    {
        language: "1",
        languageFile: "java"
    },
    {
        language: "2",
        languageFile: "ruby"
    },
    {
        language: "3",
        languageFile: "cpp"
    },
    {
        language: "4",
        languageFile: "python"
    },
]

const allCoding = myCoding.forEach( (item) => {
    console.log(item.languageFile)
    return item
})

console.log(allCoding); 

/*
In forEach call back function values are never return but in filter call back function value are return but after satisfied the condition
*/
