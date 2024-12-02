const userEmail = -0

if(userEmail){
    console.log(`got user email`)
}
else{
    console.log(`doesn't got user email`)
}

/*=================Falsy Value================== 
NOTE: false, 0, -0, BigInt 0n, null, Undefined, nan
*/
/*=================Truthy Value================== 
NOTE: 'false', "0", {}, [], function(){}, " "
*/

const array = []
if(array.length === 0){
    console.log(`arrya is empty`)
}

const emptyObject = {
    user: "pooja"
}
if (Object.keys(emptyObject).length === 0){ // Object.keys(emptyObject) == it's behave like array 
    console.log(`object is empty`)
}
else{
    console.log(`object is not empty`)
}


/*=================nullish coalescing operator(??)============== */
// const val1 = 5 ?? 10
// const val1 = null ?? 10
// const val1 = undefined ?? 10
const val1 = undefined ?? 10 ?? 16
console.log(val1)


/**==================terniary operator================= 
    condition ? true ; false
*/

const temp = 100
temp >= 60 ? console.log(`temp is less than 60`) : console.log(`temp is more than 60`)