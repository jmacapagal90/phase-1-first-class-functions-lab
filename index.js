// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(){
        return Math.round(integer * 5);
    }
}

function fareDoubler(createFareMultiplier){
    return createFareMultiplier * 2;
}

function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3;
}

// function selectDifferentDrivers(drivers,pickDrivers){
//     if (pickDrivers === returnFirstTwoDrivers){
//         return returnFirstTwoDrivers(drivers)
//     }
//         else if (pickDrivers === returnLastTwoDrivers){
//             return returnLastTwoDrivers(drivers)
//     }
// }

function selectDifferentDrivers(drivers,pickDrivers){
    return pickDrivers(drivers)
}