function getSumOfAnArray(numbers){
    let sum=0;
   for(let i=0; i<numbers.length; i++) {
    const index=i;
    const element = numbers[index]
    sum= sum+element;
    // console.log(index,element,sum)
   }
   return sum;
}

// const myNumber=[12, 65, 45, 78, 32, 45,89]
// getSumOfAnArray(myNumber)




function getOddNumberFromAnArray(numbers){
    const oddNumbers=[];
    for(let i=0; i<numbers.length; i++){
        const index =i;
        const element= numbers[index];
        if(element % 2 !==0){
            // console.log( index, element);
           
            oddNumbers.push(element) ;
        }
    
    }
    return oddNumbers;
    
}
const myNumbers=[12, 43, 32, 67, 56, 791, 98, 90]
const oddNumbers=getOddNumberFromAnArray(myNumbers)
console.log(oddNumbers);
const oddNumberSum= getSumOfAnArray(oddNumbers)
console.log('odd number sum:', oddNumberSum)