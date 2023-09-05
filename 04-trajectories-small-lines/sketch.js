let target;
let popmax;
let mutationRate;
let population;

let bestPhrase;
let allPhrases;
let stats;

let uniqueID = 0;
 
//adding this to hold onto all the populations as that come and go
let holding = [];
 
//adding this to hold onto all the pairings from mating pool
//later used in determining org paths 
// let pairings = [];

function setup() {

  createCanvas(1000, 10000);
  //changes the target to numbers as well, to match what's being created in newChar
  //gotta keep these all 8 elements
  //0-9
  target = [0,9,1,1,1,1,9,1];
  popmax = 25;
  mutationRate = 0.01;
  //lower mutationRate means longer runs
  //0.001 got a run of 5k+ generations


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
    
  //processes the holding array some
  //to make the parents line up with their children
  lineUp();
 
  console.log(holding);

  translate(500,0)
  finDisplay();

  noLoop();
  save("lines.png");
  }

}

