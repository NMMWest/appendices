function pixelsToPoly (colorPixels){

    let polyedPixels = [];

    // let xOrigin = 0;
    // let yOrigin = 0;

    let r = 1; //radius

    for (let i = 0; i < colorPixels.length; i++){
        //added the division to reduce overhead

        let rowPolys = [];

        for (let j = 0; j < colorPixels[i].length; j++){
            //equation for finding coords on a circle
                //value times 360 and divided by 255 produces what I'll use as angle

            let rVertX = r * Math.cos(((colorPixels[i][j][0] * 360)/255) * (Math.PI / 180));
            let rVertY = r * Math.sin(((colorPixels[i][j][0] * 360)/255) * (Math.PI / 180));

            let gVertX = r * Math.cos(((colorPixels[i][j][1] * 360)/255) * (Math.PI / 180));
            let gVertY = r * Math.sin(((colorPixels[i][j][1] * 360)/255) * (Math.PI / 180));

            let bVertX = r * Math.cos(((colorPixels[i][j][2] * 360)/255) * (Math.PI / 180));
            let bVertY = r * Math.sin(((colorPixels[i][j][2] * 360)/255) * (Math.PI / 180));

            let aVertX = r * Math.cos(((colorPixels[i][j][3] * 360)/255) * (Math.PI / 180));
            let aVertY = r * Math.sin(((colorPixels[i][j][3] * 360)/255) * (Math.PI / 180));

            let pixSpan = colorPixels[i][j][4]; //don't want the width (5th) value changed
            
            //pushes to rowPolys
            rowPolys.push([rVertX,rVertY,gVertX,gVertY,bVertX,bVertY,aVertX,aVertY,pixSpan]);
            //remember that z-coord will be set by whatever counter I use, say 'i'

        }
        
        //pushes to polyedPixels
        polyedPixels.push(rowPolys);

    }

return (polyedPixels)
}