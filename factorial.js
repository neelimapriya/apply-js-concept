// multiplication-of-number.js
// factorial 9!

function factorial(number){
    let result =1;
    for(let i=1; i<= number; i++){
        result = result* i;
    }
    return result;
}
const result = factorial(9);
console.log(result);




function factorialOf(number){
    let factorial=1;
    for(let i=1; i<=number; i++){
        factorial = factorial*i ;
    }
    return factorial;
}
const input=7;
console.log(factorialOf(input));