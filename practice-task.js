// the standard height of a volleyball player is 7 feet. Jim wants to join the volleyball team. so he decided to measure his height to see if he meets the standard. Calculate his height in feet. he is 84 inches.
const jimHeight =84;
const jimFeet = jimHeight/12;
console.log('jimfeet',jimFeet)

// peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help peter write the program. input-98,117

function isEven(input){
    const remainder= input % 2;
    if(remainder === 0){
        console.log('true')
    }
    else{
        console.log('false')
    }
   
}
isEven(98);
isEven(117);


// write a function findOddSum() that will take the array[5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers.

function getSumOfAnArray(numbers){
    let sum=0;
   for(let i=0; i<numbers.length; i++) {
    const index=i;
    const element = numbers[index]
    sum= sum+element;
   }
   return sum;
}


function findOddSum(numbers){
    const oddNumbers=[];
    for(let i=0; i<numbers.length; i++){
        const index =i;
        const element= numbers[index];
        if(element % 2 !==0){
           
            oddNumbers.push(element) ;
        }
    
    }
    return oddNumbers;
    
}
const myNumbers=[5,7,8,10,45,30];
const oddNumbers=findOddSum(myNumbers)
console.log('odd number array',oddNumbers);
const oddNumberSum= getSumOfAnArray(oddNumbers)
console.log('odd number sum:', oddNumberSum)


//  write a function that will take hour as the input parameter and will convert into minutes and will return the result in minutes.
const hour=2;
const fact=60*hour;
console.log(fact, 'minutes')


// write a function findLeapYear() that will take the array[2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leaf year. If a year is a leap year insert that year in a new array, return the new array and print the result.

function findLeapYear(year){
    const leapYear=[];
    for(let i=0; i<year.length; i++){
        const index=i;
        const element =year[index];
        if((0== element % 4 ) && (0 != element % 100)|| (0== element % 400)){
            
            leapYear.push(element);
        }
       
    } return leapYear;
}
const array=[2023, 2024, 2025, 2028, 2030];
const leapYear =findLeapYear(array);
console.log(leapYear);




