/*=============FOR LOOP================= */

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }


for (let i = 0; i <= 10; i++) {
    console.log(`outer value of i is: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`j: ${j}`);
        console.log(i + '*' + j + '=' + i*j)
    }
}

/*============================break and continue =========================== */

for (let index = 1; index <= 10; index++) {
    if(index == 5){
        console.log(`detect 5`)
        // break
        continue
    }
    console.log(index)
}


