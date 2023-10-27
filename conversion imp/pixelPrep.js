function pixelPrep(finalPixels){

    let processedPixels = []; //this will hold pixels array after rows are skipped, as well as triangle conversion (maybe do tri-con in separate function)

    for (let i = 0; i < finalPixels.length; i += (cWidth*4*500))   //goes by every 100 rows (*4 because of RGBA); can later multiply again by skip row amount (maybe 5 pixels)
    {         
        let tempPixels = [];                                  //holds values for each row, until they are read to push to processedPixels array
        
        for (let j = 0; j < cWidth*4; j++){
            
            //push each value into tempPixels array
            tempPixels.push(finalPixels[j+i]);
            
        }

        //push that row onto processedPixels array
        processedPixels.push(tempPixels);

    }

   // console.log(processedPixels[1000]);
    //console.log("*******");
    // console.log("break")
    // console.log(processedPixels[75]);
    return(processedPixels);


}