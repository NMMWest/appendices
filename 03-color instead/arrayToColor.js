
function arrayToColor(currentArray) {
//taking in 8 element array

//need an empty array here for storing the resulting color values
let sumOfColors = [];

//essentially each slot in the array represents a different color, the main 8
//RGB array
//1. Black: RGB(0,0,0)       
//2. White: RGB(255,255,255)       
//3. Red: RGB(255,0,0)       
//4. Green: RGB(0,255,0)       
//5. Blue: RGB(0,0,255)       
//6. Yellow: RGB(255,255,0)       
//7. Magenta: RGB(255,0,255)       
//8. Cyan: RGB(0,255,255)

const rgbArray = [
[0,0,0],
[255,255,255],
[255,0,0],
[0,255,0],
[0,0,255],
[255,255,0],
[255,0,255],
[0,255,255]
];

//make both arrays, so I can use the 'i' twice

for (let i = 0; i < currentArray.length; i++){
    //this holds the value at this spot in the array
    let numberOfTimes = currentArray[i];

    //it adds the slot's value, that value number of times
    //so it pushes to the big array
    //using do...while lets the value of 0 be counted once
    //each slot value now maps from 0-9 to 1-10
    let j = 0;
    do {
        sumOfColors.push(rgbArray[i]);
        j++;
    }
    while (j <= numberOfTimes)
}

//then that big array adds up all the first values; 
//all the second values; 
//all the third values, 
//then divides them each by sumOfColors.length
//this is then assigned to the appropriate RGB slots in the last array
//which is returned

//for testing
//console.log(sumOfColors);

let r = 0; 
let g = 0;
let b = 0;

for (let i = 0; i < sumOfColors.length; i++){

    let red = sumOfColors[i][0];

    let green = sumOfColors[i][1];

    let blue = sumOfColors[i][2];

    r += red;
    g += green;
    b += blue; 

}

//rounding down to whole number
let redFinal = Math.floor(r/sumOfColors.length);
let greenFinal = Math.floor(g/sumOfColors.length);
let blueFinal = Math.floor(b/sumOfColors.length);

//console.log([redFinal,greenFinal,blueFinal]);
return ([redFinal,greenFinal,blueFinal]);

}