/*==============================immediately invoked function execution================== */

// function oneCode(){
//     console.log(`pooja`)
// }

// oneCode()

(function oneCode(){
    console.log(`pooja`)
})(); /*==================we should to use semi column============= */

(() => {
    console.log(`sharma`)
})();

((name) => {
    console.log(`sharma ${name}`)
})('pooja')