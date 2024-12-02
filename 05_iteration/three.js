/*=====================for of && for in===================== */
const value = [10, 9, 8, 7, 6, 5, 4] 

for(const num of value){
    // console.log(num)
}

const string = "helloWorld!"
for(const describe of string){
    // console.log(describe)
}


/*========================MAp======================= */

const map = new Map()

map.set('val1', "name")
map.set('val2', "email")
map.set('val3', "number")
map.set('val4', "address")

// console.log(map)


for(const [key, value] of map){
    console.log(key, '=>', value)
}



const myObject = {
    'game1': "spider",
    'game2': "mario"
}

for(const [key, value] of myObject){
    console.log(key, '=>', value)
}