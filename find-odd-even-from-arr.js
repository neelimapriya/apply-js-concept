// find even number from an array
function getEvenNumbersOfAnArray( numbers){
    for(let i=0; i<numbers.length; i++){
        const index=i;
        const element=numbers[index];
        if(element % 2 ===0){
            console.log(index,element);
        }
    }
}
const myNumber=[1, 3, 23, 34, 54, 67, 98, 96, 22]
getEvenNumbersOfAnArray(myNumber);

// find odd number from an array
function getOddNumberFromAnArray(numbers){
    const oddNumbers=[];
    for(let i=0; i<numbers.length; i++){
        const index =i;
        const element= numbers[index];
        if(element % 2 !==0){
            console.log('odd number', index, element);
           oddNumbers.push(element) ;
        }
    }
    return oddNumbers;
}
const myNumbers=[12, 43, 32, 67, 56, 791, 98, 90]
const oddNumbers=getOddNumberFromAnArray(myNumbers)
console.log(oddNumbers)
// getOddNumberFromAnArray(myNumbers)