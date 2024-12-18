/*=====================for of && for in===================== */
const value = [10, 9, 8, 7, 6, 5, 4] 

for(const num of value){  //for(const iterator of object)
    // console.log(num)
}

const string = "helloWorld!"
for(const describe of string){
    // console.log(describe)
}


/*======================== Maps (object)======================= */
// It's known as unique value and print value as order
const map = new Map()

map.set('val1', "name")
map.set('val2', "email")
map.set('val3', "number")
map.set('val4', "address")
map.set('val1', "name")

// console.log(map)


for(const [key, value] of map){  // de-stracture of array
    // console.log(key, '=>', value)
}



const myObject = {
    'game1': "spider",
    'game2': "mario"
}

// for(const [key, value] of myObject){  // it's not working coz "for of" loop is not for object iterator
//     console.log(key, '=>', value)
// }

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`object key is: ${key} and value is: ${myObject[key]}`);
    
}