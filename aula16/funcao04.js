//5! = 5 x 4 x 3 x 2 x 1 = 120
let n = 5

function fatorial(num){
    let fat=1
    for(let x=n;x>1;x--){
        fat = fat*x
    }
    return fat
}
console.log(fatorial(n))