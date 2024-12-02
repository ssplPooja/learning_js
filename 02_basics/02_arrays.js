const marvel_hero = ["a", "b", "c"]
const dc_hero = ["d", "e", "f"]


// marvel_hero.push("d", "f")
// console.log(marvel_hero.push("d", "f"))
// console.log(marvel_hero.push(dc_hero))

// marvel_hero.push(dc_hero)
// console.log(marvel_hero)

const concat = marvel_hero.concat(dc_hero)
// console.log(concat)

const spread = [...marvel_hero, ...dc_hero]
// console.log(spread)


//in concat we only add 1 value but in spread method 

let another_arr = [1, 3, 2, 4, [ 1, 2, 3, 4, 5], 8, 9, [3, [4, 5, 6, 7]]]
let real_another_arr = another_arr.flat(Infinity) // flat return a new single array where merge all sub array 
// console.log(real_another_arr)

console.log(Array.isArray("pooja"))
console.log(Array.from("pooja")) // convert all datatypes to in array 

console.log(Array.from({name: "pooja"})) // Intersting

