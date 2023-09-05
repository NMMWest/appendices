function findOffshoots(allGens){

    //takes in a large array of each population throughout the run
    //search for orgs without a 3rd element in their path array
    //has a running counter for each population
        //if it gets to two in a row, those to are noted for later
        //if finds one with a 3rd element, restarts the counter
        let offParent1 = [];
        let offParent2 = [];
 
    for (let i = 3; i < allGens.length-5; i++){
        //starting after first few generations
        //ending well before final generation, no time to be having offshoots

        let counter = 0;

        for (let j = 0; j < allGens[i].length; j++){

            if (!allGens[i][j].path[2]){
                console.log("miss");
                counter++;
            }
            if (allGens[i][j].path[2]){
                console.log("hit");
                counter = 0;
            }
            if (counter > 2){
                //am actually doing this for several consecutive childless orgs
                //so that it will keep the occurances down
                //still only taking 2
                //if it gets to 2, saves last two orgs
                //and exits this j loop.
                //would only get to 2 if j was now greater than two, so it's safe to take minus 1
                // console.log(allGens[i][j]);
                // console.log(allGens[i][j-1]);
                allGens[i][j-1].path.push([popmax/2,i+0.1]);
                allGens[i][j].path.push([popmax/2,i+0.1]);

                allGens[i][j-1].path.push([popmax/2,i+1]);
                allGens[i][j].path.push([popmax/2,i+1]);

                offParent1.push(allGens[i][j-1]);
                offParent2.push(allGens[i][j]);

                counter = 0;

             }
           
        }


    }    
    
    return([offParent1,offParent2])

}