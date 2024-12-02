

// function sayName(){
//     console.log("p")
//     console.log("o")
//     console.log("o")
//     console.log("j")
//     console.log("a")
// }

// sayName()

// function addNumber(n1, n2){ // here is n1 and n2 are parameters
//     console.log(n1 + n2)
// }

// addNumber(4, 6) // here is 4 and 6 are arguments

function addNumber(n1, n2){ 
    // let result =  n1 + n2
    // return result   
    // console.log(n1 + n2)

    return n1 + n2
}

const result = addNumber(5, 7)
// console.log(result) 


function loginUsername(username){
    if (username === undefined){
        // console.log("please enter username value")
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUsername("pooja"))
// console.log(loginUsername("pooja"))



/*===========================shopping cart======================= */

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, "hghgh" ))

const user = {
    item : "shampoo",
    price: 300
}

function handleOject(anyobject){
    return `${anyobject.item} has price ${anyobject.price}`
}

console.log(handleOject({
    item: "soap",
    price: 500
}))
