let target;
let popmax;
let mutationRate;
let population;

let bestPhrase;
let allPhrases;
let stats;

//adding this to hold onto all the populations as that come and go
let holding = [];

function setup() {

  createCanvas(600, 800);
  //changed the target to numbers as well, to match what's being created in newChar
  //gotta keep these all 8 elements
  target = [1,1,1,1,1,1,1,1];
  popmax = 50;
  mutationRate = 0.01;

  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(target, mutationRate, popmax);
}

function draw() {
  // Generate mating pool
  population.naturalSelection();
  // Create next generation
  population.generate();
  // Calculate fitness

  //adding this
  //pushes the arrays of the current population to holding array
  //more parsing involved, because of organism objects
  holding.push(JSON.parse(JSON.stringify((population.population))));

  population.calcFitness();

  population.evaluate();

  // If we found the target phrase, stop
  if (population.isFinished()) {
    //added this
    //sends giant array of all the arrays from all the generations/populations to 
    //grabGenes function, where only the genes values are sent back
    let holdingGenes = grabGenes(holding);
    //console.log(holdingGenes);

    let y = 0;
    let squareSize = 20;

    let currentColor = [];
  
    //runs each element of holdingGenes array through arrayToColor function
    //and assigns result into currentColor array
    for (let j = 0; j < holdingGenes.length; j++){
  
        let quickColor = [];
  
        for (let i = 0; i < holdingGenes[j].length; i++){
            //console.log(holdingGenes[j][i]);
            //console.log(arrayToColor(holdingGenes[j][i])); 
            quickColor.push(arrayToColor(holdingGenes[j][i]));    
     
        }
  
        currentColor[j] = quickColor;
  
    }
    //console.log(currentColor);
  
    //assigns elements of each array to corresponding RGB slots of p5.js color function
    //then displays rectangle
    for (let j = 0; j < currentColor.length; j++){
  
        for (let i = 0; i < currentColor[j].length; i++){
  
            let red = currentColor[j][i][0];
            let green = currentColor[j][i][1];
            let blue = currentColor[j][i][2];
  
            let c = color(red, green, blue);
            fill(c);
            rect(i*squareSize, y, squareSize, squareSize);
  
        }
  
        y += squareSize;

    noLoop();
  }

}
}
