
//this was a first pass at what became lineUp.js



//this gets called after GA stuff is done running
//and before the display function is called

function trajectory(holding,pairing){

    // let holding = holding;
    // let pairing = pairing;

    //takes in two arrays, holding and pairings, and returns an updated version of holding array
    for (let i = 0; i < holding.length; i++){
        for (let j = 0; j < holding[i].length; j++){
        //first value: 
            //searches pairing[i] array for both parentIDs pairing
                //takes their pairing element position and adds it to current generation count as 'y'
                    //as a decimal (0.1 added to 14, for example)
                    //it's whatever variable I use to loop 
            //searches holding[i] array for each parentID
                //saves the loop variable for each
                //then takes the floored average of those as 'x'
        
        //second value: [i,j]; works because position within generation equates to 'x' and position within generations equates to 'y'
            //should be same 'i' value, because pairings only starts after first org generation)
        
        //third (and beyond) value: searches pairings[i + 1] for uID
            //those returned ids are themselves used to determine position
                //the variable for that loop becomes the decimal add to larger i for the whole thing to 
                //determine 'y'

                //maybe saves the loop variable and the partner ID for next finding that 'x'

        }

    }


    // After the GA run is complete, Line Paths are determined for each org in holding
    // - First value: 
    //     - 
    //         - If find parents in pairing array
    //             - Take midpoint of parents’ positions in previous holding array row as ‘x’ and generation at that time + parents’ pairing order in that pairing array row as ‘y’
    //         - If no parents, or now holding/pairing array before it, first value equals their position in current holding array for ‘x’ and ‘y’ = 0
    // - Second value: 
    //     - Org’s array position in their own generation is ‘x’ and ‘y’ is that generation
    // - Remaining values:
    //     - Goes through following pairing array
    //         - If found (has offspring)
    //             - Position in that array is ‘y’ (as it shows order in which they took place)
    //             - Take midpoint of org and partner’s positions in current holding array row as ‘x’ 
    //         - If not found (has no offspring)
    //             - Small ’X’ and ‘y’ randomly added to org’s start position


}




//for the orgs with no offspring
let nudge = [-4,-3,-2,-1,1,2,3,4,5,6];
let nudgeSelect = (Math.floor(Math.random()*10));