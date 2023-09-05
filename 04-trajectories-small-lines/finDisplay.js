function finDisplay(){
    //display
    //runs each element of holdingGenes array through arrayToColor function
    //and assigns result into currentColor array
    for (let i = 1; i < holding.length; i++){

        for (let j = 0; j < holding[i].length; j++){
  
        let quickColor =  arrayToColor(holding[i][j].genes);
  
        stroke(quickColor[0],quickColor[1],quickColor[2]);
    
        //am ignoring the last element, because it is already used during the predecessor line segment as its endpoint
        //eventually change this to curve or arc or something to make smoother transitions between segments

        for (let k = 0; k < holding[i][j].path.length-1; k++){
            strokeWeight(6);

            if (k==0){
            strokeWeight(3);
            }

            line (
            20*holding[i][j].path[k][0],400*holding[i][j].path[k][1],
            20*holding[i][j].path[k+1][0],400*holding[i][j].path[k+1][1],
            )
       
        }
        endShape(); 
  
      } 
  
    }

}