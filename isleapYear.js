function isLeapYear (year){
    const remainder= year % 4;
    if(remainder===0){
        console.log('your year is leap year',year)
    }
    else{
        console.log('your is not a leap year',year)
    }
}
isLeapYear(1933);
isLeapYear(2020);
isLeapYear(2025);


// alternative
function checkLeapYear(year){
    if((0== year % 4 )&& (0 != year% 100)|| (0==year%400)){
        console.log(year, 'is a leap year');
    }
    else{
        console.log(year,"is not a leap year");
    }
}
const year= 2023;
checkLeapYear(year);