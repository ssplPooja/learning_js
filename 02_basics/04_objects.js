// singleten 
// Object.create     (constructor method) it's used for singleten object 


//// METHODS WE USE MOST
//1. assign, 2. Spread, 3. keys and values, 4. entries, 5. hasOwnProperty

// const marvel_hero = {1: "a", 2: "b", 3: "c"}
// const dc_hero = {4: "d", 5: "e", 6: "f"}
// const concat = {...marvel_hero, ...dc_hero}
// console.log(concat)

const insta = new Object()

console.log(insta)

insta.id = 65246
insta.name = "pooja"
insta.loggedIn = false

console.log(insta)

const regularUser = {
    email: 'pooja@gmail.com',
    fullname: {
        userfullname:{
            firsName: "pooja",
            lasrName: "sharma"
        }
    }
}

console.log(regularUser)
console.log(regularUser.email)

/*===================+++++++++ Merge two object +++++++===================== */

const marvel_hero = {1: "a", 2: "b", 3: "c"}
const dc_hero = {4: "d", 5: "e", 6: "f"}

// const concat = {...marvel_hero, ...dc_hero}

// console.log(concat)

console.log(Object.assign({}, marvel_hero, dc_hero))

console.log(insta)
console.log(Object.keys(insta))
console.log(Object.values(insta))
console.log(Object.entries(insta))
console.log(insta.hasOwnProperty('email'))