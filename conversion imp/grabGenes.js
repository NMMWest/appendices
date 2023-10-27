
function grabGenes(allPops) {
    //takes in a multidimensional array storing the population (arrays) for each generaion

    let totalPops = []; 

    for (let j = 0; j < allPops.length; j++){

        let currentPop = [];

        for (let i = 0; i < allPops[j].length; i++){

            currentPop.push(allPops[j][i].genes);

        }

        totalPops.push(currentPop);

    }

    return totalPops;
}