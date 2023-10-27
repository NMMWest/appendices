function pixelSpan(processedArray){
  
    let spannedArray = [];
    
    for (let i = 0; i < processedArray.length; i++){
      
      let rowColors = []; //holds all the color info for row; cleared after each i++
      
      let currentR = -5; //red
      let currentG = -5; //green
      let currentB = -5; //blue
      let currentA = -5; //alpha
      let currentS = 0; //span/width
  
      for (let j = 0; j < processedArray[i].length; j+=4){
        
        //if equal, 
          //moves on, with only tally incremented
        
        if 
        (processedArray[i][j] == currentR &&
        processedArray[i][j+1] == currentG &&
        processedArray[i][j+2] == currentB &&
        processedArray[i][j+3] == currentA)
        {
          currentS++;
          
        }
        
        
        else{
          
          rowColors.push([currentR, currentG, currentB, currentA, currentS]);
          
          currentR = processedArray[i][j];
          currentG = processedArray[i][j+1];
          currentB = processedArray[i][j+2];
          currentA = processedArray[i][j+3];
          currentS = 1; //they are already a first instance
          
        }
        
      }
      
      rowColors.push([currentR, currentG, currentB, currentA, currentS]);
      //rowColors is pushed onto spannedArray
      //maybe put in something that skips first item, since it'll always be -5s
      spannedArray.push(rowColors);
      
    }
    
    //console.log(spannedArray[1000]);
    
    return(spannedArray);
  }