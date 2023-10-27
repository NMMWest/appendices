let target;
let popmax;
let mutationRate;
let population; 
  
let bestPhrase;
let allPhrases;
let stats;
let cWidth = 3000;
let cHeight = 5000;
 
let firstX;
let secondX;

let uniqueID = 0;

let scaleDenom = 1;

 
function setup() {

  createCanvas(cWidth, cHeight);
 
  target = [1,1,1,1,2,2,2,2];
  nicheTarget = [6,3,4,8,7,5,9,1];
  nicheTarget2 = [2,3,4,2,9,5,2,9];
  nicheTarget3 = [5,3,4,2,4,5,2,7];

  popmax = 30; //50 also looks good, play with popmax value a bunch
  mutationRate = 0.03;

  population = new Population(target, mutationRate, popmax);
}

function draw() {

  

  // Generate mating pool
  population.naturalSelection();
  //console.log("pop naturalSelection passed");
  // Create next generation
  population.generate();
  //console.log("pop generate passed");

  population.preserve();
  //console.log("pop preserve passed");

  population.calcFitness();
  //console.log("pop calcFitness passed");

  population.evaluate();
  //console.log("pop evaluate passed");


  // If we found the target phrase, stop
  if (population.isFinished()) {

    console.log("main branch finished");

    let mainBranch = lineUp(population.holding);

    // finDisplay(mainBranch);

    let shoots = findOffshoots(mainBranch);

    // console.log(shoots[0]);
    // console.log(shoots[1]);
    // console.log(shoots[0][0].genes);
    // console.log(shoots[1][0].genes);
    firstX = shoots[0][0].path[1][0];

    let firstGenes = shoots[0][0].genes;
    let secondGenes = shoots[1][0].genes;

    secondX = shoots[0][1].path[1][0];

    let firstGenes2 = shoots[0][1].genes;
    let secondGenes2 = shoots[1][1].genes;

    thirdX = shoots[0][2].path[1][0];

    let firstGenes3 = shoots[0][2].genes;
    let secondGenes3 = shoots[1][2].genes;

    //this grabs the first parent's path
    //the second y value become the y adjust value

    //the plus one is to offset it from the generation from which it springs
    let yTranslation = ((shoots[0][0].path[1][1]) + 1)*150;

    //this grabs the first parent's path
    //the second y value become the y adjust value
    let yTranslation2 = ((shoots[0][1].path[1][1])+1)*150;

    let yTranslation3 = ((shoots[0][2].path[1][1])+1)*150;


    //part here that adjusts offshoot parent orgs' third path element
    //so that it can have a longer line leading to the offshoot run
    // let firstLine1 = shoots[1][0].path[1][1];
    // let firstLine2 = shoots[1][0].path[1][0];

    // let secondLine1 = shoots[0][0].path[1][1];
    // let secondLine2 = shoots[0][0].path[1][0];

    // mainBranch[firstLine1][firstLine2].path.push(([2*(popmax-1),shoots[1][0].path[1][1]+1]));
    // mainBranch[secondLine1][secondLine2].path.push(([2*(popmax-1),shoots[1][0].path[1][1]+1]));


    nichePop = new Population(nicheTarget, mutationRate, popmax, firstGenes, secondGenes);
   
    while (!nichePop.isFinished()){
    nichePop.naturalSelection();
    console.log("niche naturalSelection passed");
  
    nichePop.generate();
    console.log("niche generate passed");
  
    nichePop.preserve();
    console.log("niche preserve passed");
  
    nichePop.calcFitness();
    console.log("niche calcFitness passed");
  
    nichePop.evaluate();
    console.log("niche evaluate passed");
    }

    if (nichePop.isFinished()) {
      enviro();
      //gotta keep it centered even as offshoot expand outward
      let adjustX = 10*popmax-1;

      scaleDenom = scaleDenom *2;
      let sideBranch = lineUp(nichePop.holding);

      //bit more for the main branch, to center it on canvas
      translate (width/2, 200);
      finDisplay(mainBranch);

      translate (-adjustX/2, -150);//the 100 is some fraction of the original offset, not the usual y multiplier
      scale(2);
      translate (0, yTranslation/2);
     
      finDisplay(sideBranch);
      translate (0, -yTranslation/2);
      


      nichePop2 = new Population(nicheTarget2, mutationRate, popmax, firstGenes2, secondGenes2);

      while (!nichePop2.isFinished()){
        nichePop2.naturalSelection();
        console.log("niche2 naturalSelection passed");
      
        nichePop2.generate();
        console.log("niche2 generate passed");
      
        nichePop2.preserve();
        console.log("niche2 preserve passed");
      
        nichePop2.calcFitness();
        console.log("niche2 calcFitness passed");
      
        nichePop2.evaluate();
        console.log("niche2 evaluate passed");
        }

        if (nichePop2.isFinished()) {
          scaleDenom = scaleDenom *2;
          let sideBranch2 = lineUp(nichePop2.holding);         

          translate (-adjustX/2, -150);
          scale(2);
          translate (0, yTranslation2/4);
          
          finDisplay(sideBranch2);
          translate (0, -yTranslation2/4);
        

          nichePop3 = new Population(nicheTarget3, mutationRate, popmax, firstGenes3, secondGenes3);

          while (!nichePop3.isFinished()){
            nichePop3.naturalSelection();
            console.log("niche2 naturalSelection passed");
      
            nichePop3.generate();
           console.log("niche2 generate passed");
      
           nichePop3.preserve();
           console.log("niche2 preserve passed");
      
            nichePop3.calcFitness();
           console.log("niche2 calcFitness passed");
      
            nichePop3.evaluate();
            console.log("niche2 evaluate passed");

          }
          if (nichePop3.isFinished()) {
            scaleDenom = scaleDenom *2;
            let sideBranch3 = lineUp(nichePop3.holding);

            translate (-adjustX/2, -150);
            scale(2);
            translate (0, yTranslation3/8);
            
            finDisplay(sideBranch3);
            translate (0, -yTranslation3/8);
          
            //doing this here instead of as background so that it can be last/top color
            //must first undo scaling, etc.
            //pop();
            // enviro();

            // console.log(yTranslation/150);
            // console.log(yTranslation2/150);
            // console.log(yTranslation3/150);

            noLoop();

            save("enviro1.png");


            //this part strips out the enviro colors, without affecting the blended colors it contributed to
            //conditions here must be manually updated as the enviro colors change
            //eventually, make it automatic
            loadPixels();
    
            for (var i = 0; i < pixels.length; i++) 
            {
              if (pixels[i] == 226 && pixels[i+1] == 212)
              {
              pixels[i+3] = 0;
              }
              if (pixels[i] == 179 && pixels[i+1] == 143)
              {
              pixels[i+3] = 0;
              }
              if (pixels[i] == 70 && pixels[i+1] == 102)
              {
              pixels[i+3] = 0;
              }
             if (pixels[i] == 67 && pixels[i+1] == 80)
              {
              pixels[i+3] = 0;
              }
              if (pixels[i] == 209 && pixels[i+1] == 100)
              {
              pixels[i+3] = 0;
              }
            }
            
            updatePixels();

            save("enviro2.png");

            let preppedPixels = pixelPrep(pixels);

            let midPixels = pixelSpan(preppedPixels);

            console.log(midPixels);

            let finalPixels = pixelsToPoly(midPixels);

            save(finalPixels, "output_text.csv");

            noLoop();


            //might have to process/slim the pixels array before it can even be downloaded, too large
              //every 3rd row, cuts by 66%
              //stretch of pixels described by 3 vertices and width, instead of 50 or more pixels, cuts by another half at least
            //send pixels to this separate function for processing
            //https://www.geeksforgeeks.org/p5-js-save-function/  for p5.js saving options


          }
      
    }

    }

  }

}
