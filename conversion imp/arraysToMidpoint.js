
//this function finds the midpoint between same order elements of two different arrays
function arraysToMidpoint(a, b) {
    
    //takes in two arrays, both with 8 elements
    let currentOrg = a;
    let currentStimulus = b;

    //array to hold the new midpoint values
    let midArray = [];

    //this takes the midpoint value between the two elements from the two arrays
    for (let i = 0; i < currentOrg.length; i++){
       midArray[i] = Math.floor((currentOrg[i] + currentStimulus[i])/2);
    }

    //results might sometimes be sent to arrayToColor function
    //return midArray;
    //console.log(midArray);

    }