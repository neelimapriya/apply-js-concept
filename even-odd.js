function isEven(number){
    const remainder= number % 2;
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumber=isEven(303);
console.log(myNumber);
const herNumber =isEven(128);
console.log(herNumber)