//changing to numbers, so that I'll be able to better manipulate them as I go forward
function newChar() {
  let c = Math.floor(Math.random() * 10);
  return c;
}
 
// Constructor (makes a random DNA)
class DNA {
  constructor(num) {
    //unique ID
    //generates a random 5-digit number
    //this actually migth create a conflict 1 out of every 5k times, where two orgs get assigned the same uID
    //eventually change to single use IDs
    //this.uID = Math.floor(Math.random() * 10000);  
    this.uID = uniqueID;
    uniqueID++;
    //parents
    this.parentIDs = [];
    //line path
    this.path = [];
    // The genetic sequence
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = newChar(); // Pick from range of chars
    }
  }

  // Converts character array to a String
  getPhrase() {
    return this.genes.join("");
  }

  // Fitness function (returns floating point % of "correct" characters)
  calcFitness(target) {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      //I'm changing this to compare against the array that is the target now
      //if (this.genes[i] == target.charAt(i)) {
      if (this.genes[i] == target[i]) {
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  // Crossover
  crossover(partner) {
    // A new child
    let child = new DNA(this.genes.length);

    let midpoint = floor(random(this.genes.length)); // Pick a midpoint

    // Half from one, half from the other
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }

  // Based on a mutation probability, picks a new random character
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = newChar();
      }
    }
  }
}