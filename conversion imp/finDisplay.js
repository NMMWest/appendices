function finDisplay(epochArray){
    //display
    //runs each element of holdingGenes array through arrayToColor function
    //and assigns result into currentColor array
    for (let i = 1; i < epochArray.length; i++){
 
        for (let j = 0; j < epochArray[i].length; j++){
  
        let quickColor =  arrayToColor(epochArray[i][j].genes);
        
        //blendMode(DIFFERENCE); //best one so far
        //blendMode(DIFFERENCE);
        noFill();
        stroke(quickColor[0],quickColor[1],quickColor[2]);
            
        //am ignoring the last element, because it is already used during the predecessor line segment as its endpoint
        //eventually change this to curve or arc or something to make smoother transitions between segments

        for (let k = 0; k < epochArray[i][j].path.length-1; k++){

            let leftRight; 
            let coinFlip = Math.random()*10;

            if (coinFlip > 5){
                leftRight = -1;
            }
            else{
                leftRight = 1;
            }
            
            strokeWeight(6);

            if (k==0){
                strokeWeight(3);
            }

            // line (
            // //need to make this a spacer variable, using it in several places   
            // 10*epochArray[i][j].path[k][0],150*epochArray[i][j].path[k][1],
            // 10*epochArray[i][j].path[k+1][0],150*epochArray[i][j].path[k+1][1],
            // )

            curve(
                10*epochArray[i][j].path[k][0] + (60*leftRight),
                150*epochArray[i][j].path[k][1],
                
                10*epochArray[i][j].path[k][0],
                150*epochArray[i][j].path[k][1],
                
                10*epochArray[i][j].path[k+1][0],
                150*epochArray[i][j].path[k+1][1],
               
                10*epochArray[i][j].path[k+1][0] + (60*leftRight),
                150*epochArray[i][j].path[k+1][1],
                
                )

            // bezier(

            // 10*epochArray[i][j].path[k][0],
            // 150*epochArray[i][j].path[k][1],
            // 10*epochArray[i][j].path[k][0] + (10*leftRight),
            // 150*epochArray[i][j].path[k][1]-1, //need it pulled backward, can't have curve leaning ahead at all
            // 10*epochArray[i][j].path[k+1][0] + (10*leftRight),
            // 150*epochArray[i][j].path[k+1][1]-1,
            // 10*epochArray[i][j].path[k+1][0],
            // 150*epochArray[i][j].path[k+1][1],
            
            // )
       
        }
       // endShape(); 
  
      } 
  
    }

}