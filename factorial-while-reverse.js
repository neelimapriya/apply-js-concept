// factorial-while-reverse.js
function factorial(number){
    let result=1;
    let i=number;
    while(i >= 1){
        result=result*i;
        i--;
    //  console.log(i)
    }
    return result;
}
const num= 7;
console.log(factorial(num))

