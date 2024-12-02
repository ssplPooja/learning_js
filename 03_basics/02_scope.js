// let a = 10
// const b = 20
// var c =  30

var c = 300

if(true){
    let a = 10
    const b = 20
    c =  30
}



// console.log(a)
// console.log(b)
// console.log(c)


/*=============================nested Scope===================== */
function one(){
    const username = "pooja"
    
    function two(){
        const website ="github desktop"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()


if(true){
    const username = "pooja"

    if (username === "pooja"){
        const website = " github desktop"
        // console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)


/*=============================INTERSTING===================== */

console.log(addOne(5))
function addOne(num){ // function declaration
    return num + 1
}




addtwo(6)
const addtwo = function(num){ // expression function 
    return num + 1
}
