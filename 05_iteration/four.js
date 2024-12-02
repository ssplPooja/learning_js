const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`)
}

const myArray = ["js", "c++", "java"]

for (const key in myArray) {
    console.log(key)
}
