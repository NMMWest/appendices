function lineUp (){
    //processes the holding array some
    //to make the parents line up with their children
    
    //it gets the first parentID index
    //then it gets the second parentID index
    //averages them 
    //pushes this onto org's path array as the first 'x'
    //testing this out
    //starting it at one, because the first generation didn't have "parents"
    //**will have to hard code something for them later**
    for (let i = 1; i < holding.length; i++){
      for (let j = 0; j < holding[i].length; j++){

      let x1 = holding[i-1].findIndex(hold => hold.uID == holding[i][j].parentIDs[0])//first parent
      let x2 = holding[i-1].findIndex(hold => hold.uID == holding[i][j].parentIDs[1])//second parent

      let xMid = (x1 + x2)/2;
      ////////////////////////////working on below//////////

      //the org position in the current generation is j
      //this also represents the order in which they were "born"
      //i is essentially the same as generations, so minus one to point to the last generation starting point
      //so this adds the decimal to the last generation 
      let y1 = (i-1) + (j/popmax);

       //so can be used as y coord, which will later have a multiplier
       //this gets tweaked later, because the y will actually be between the generations by a pairings decimal
      //console.log(y);
       holding[i][j].path.push([xMid, y1]);//first point of the path

       //then do one where the second x would just be 'j', since it's that position in the array loop
       //the y comes comes the generation again, for now, eventually it's added to a decimal from pairings
       holding[i][j].path.push([j,i]);//second point of the path

      }
   
    }


    for (let i = 1; i < holding.length; i++){
     for (let j = 0; j < holding[i].length; j++){

      //goes through the current org row
      //search for org's uID amongst i + 1 parentIDs
      //is currently returning an error from the [i+1] moves

      let yTemp = [];
      let otherParent = [];

      for (let k = 0; k < holding[i].length; k++){

        if(holding[i-1][j].uID == holding[i][k].parentIDs[0]){
          //k becomes the y incrementor
          //yTemp.push(k);  
          yTemp.push(i-1 + (k/popmax));  
          //maybe put the find index here
          //otherParent.push(holding[i][k].parentIDs[1]);
          let mateTemp = holding[i-1].findIndex(hold => hold.uID == holding[i][k].parentIDs[1])//other parent
          let midMate = (mateTemp + j)/2;
          otherParent.push(midMate);

        }

        else if (holding[i-1][j].uID == holding[i][k].parentIDs[1]){
          //k becomes the y incrementor
          yTemp.push(i-1 + (k/popmax));  
          //otherParent.push(holding[i][k].parentIDs[0]);
          let mateTemp = holding[i-1].findIndex(hold => hold.uID == holding[i][k].parentIDs[0])//other parent
          let midTemp = (mateTemp + j)/2;
          otherParent.push(midTemp);
          
        }
      }
      for (let h = 0; h < yTemp.length; h++){
      holding[i-1][j].path.push([otherParent[h],yTemp[h]]);
      }


    }
 
  }
}