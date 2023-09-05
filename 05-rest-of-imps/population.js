 class Population {
  constructor(p, m, num, extra1, extra2) {

    this.holding = []; //holds all the generations

    this.population; // Array to hold the current population
    this.matingPool; // ArrayList which we will use for our "mating pool"
    this.generations = 0; // Number of generations
    this.finished = false; // Are we finished evolving?
    this.target = p; // Target phrase
    this.mutationRate = m; // Mutation rate
    this.perfectScore = 1;
    this.firstParent = extra1;
    this.secondParent = extra2;

    this.best = "";
 
    this.population = [];

    for (let i = 0; i < num; i++) {
      this.population[i] = new DNA(this.target.length);
    }
    //checks if there was an extra value and then updates genes if so  
    
    this.matingPool = [];
    this.calcFitness();

    if(this.firstParent){
      this.offShot();
      }
  }

  // Fill our fitness array with a value for every member of the population
  calcFitness() {
    for (let i = 0; i < this.population.length; i++) {
      this.population[i].calcFitness(this.target);
    }
  }

  // Generate a mating pool
  naturalSelection() {
    console.log(JSON.parse(JSON.stringify(this.population)));

    // Clear the ArrayList
    this.matingPool = [];

    let maxFitness = 0;

    for (let i = 0; i < this.population.length; i++) {
      if (this.population[i].fitness > maxFitness) {
        maxFitness = this.population[i].fitness;
      }
    }
    
    console.log(maxFitness);
    //since the offshoots will have less initial variation across the population
    //as well as a new target
    //they will often have no fitness value for a while
    //adding a condition to check and accomodate for this
    if (maxFitness == 0){
      maxFitness = 1;
    }
   
    for (let i = 0; i < this.population.length; i++) {
      //changed this to 1-10, to prevent zero from gumming up the works
      let fitness = map(this.population[i].fitness, 0, maxFitness, 1, 10);
     if (fitness == 0){
      console.log("zerooo");
     }
      let n = floor(fitness * 10);
      
      for (let j = 0; j < n; j++) {
        this.matingPool.push(this.population[i]);
      }
    }

    console.log(JSON.parse(JSON.stringify(this.matingPool)));
  }

  // Create a new generation
  generate() {
    // Refill the population with children from the mating pool
    console.log(JSON.parse(JSON.stringify(this.matingPool)));

    //maybe can add it here?
    for (let i = 0; i < (this.population.length); i++) {
      

      let a = floor(random(this.matingPool.length));
      let b = floor(random(this.matingPool.length));
      
      //for a matter focused approach, I can't let an organism partner with itself
      //in GAs this isn't a big deal, but it's not matter-realistic given the conditions
      //for now, just giving it another shot
      while(this.matingPool[a]==this.matingPool[b]){
        a = floor(random(this.matingPool.length));
        b = floor(random(this.matingPool.length));
        
       }

      let partnerA = this.matingPool[a];
      let partnerB = this.matingPool[b];
     
      let child = partnerA.crossover(partnerB);

      child.parentIDs.push(partnerA.uID);
      child.parentIDs.push(partnerB.uID);

      child.mutate(this.mutationRate);
      this.population[i] = child;
    }
    
    this.generations++;

  }

  getBest() {
    return this.best;
  }

  // Compute the current "most fit" member of the population
  evaluate() {
    let worldrecord = 0.0;
    let index = 0;
    for (let i = 0; i < this.population.length; i++) {
      if (this.population[i].fitness > worldrecord) {
        index = i;
        worldrecord = this.population[i].fitness;
      }
    }

    this.best = this.population[index].getPhrase();
    if (worldrecord === this.perfectScore) {
      this.finished = true;
    }
  }

  isFinished() {
    return this.finished;
  }

  getGenerations() {
    return this.generations;
  }

  // Compute average fitness for the population
  getAverageFitness() {
    let total = 0;
    for (let i = 0; i < this.population.length; i++) {
      total += this.population[i].fitness;
    }
    return total / (this.population.length);
  }

  allPhrases() {
    let everything = "";

    let displayLimit = min(this.population.length, 50);


    for (let i = 0; i < displayLimit; i++) {
      everything += this.population[i].getPhrase() + "<br>";
    }
    return everything;
  }

  preserve(){
    //this perserves each generation in holding
    //so that it can later be used for displaying in finDisplay
    this.holding.push(JSON.parse(JSON.stringify((this.population))));

  }

  offShot(){

      for (let i = 0; i < this.population.length; i++){

        for (let j = 0; j < this.population[i].genes.length; j++){
 
            let midpoint = floor(random(this.target.length));
            if (j > midpoint) {
             this.population[i].genes[j] = this.firstParent[j]; 
            }
            else{
              this.population[i].genes[j] = this.secondParent[j]; 
            }
             
       }

      

     }

     console.log(JSON.parse(JSON.stringify(this.population)));

  
  }
}

