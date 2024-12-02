// singleten 
// Object.create(constructor method) it's used for singleten object 


// Object Literals 

const sym = Symbol()

const jsUser = {
    name: "pooja", 
    "full name": "pooja sharma",
    [sym]: "mykey1", // to define symbol in object use [] syntax
    "email": "pooja@gmail.com",
    number: 48745965438,
    days: ["sat", "mon"]
}


// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(typeof jsUser[sym])
// console.log(jsUser);

jsUser.email = "pooja_sspl@gmail.com";
// Object.freeze(jsUser) // this method freeze the value and after this method we can't change the value of object 
jsUser.name = "harshita"

// console.log(jsUser)


// function
jsUser.greeting = function(){
    console.log(`hello Js user, ${this.name}`)
}

jsUser.greeting()