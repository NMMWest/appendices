// function enviro() {

//     let x = 0;
//     let y = 0; 

//     let cellWidth = 100;
//     let cellHeight = 100;

//     let dispersal = 4;

//     for (let j = 0; j < height; j = j+100){

//         x = 0;
//         y = y + 100;

 
//         for (let i = 0; i < width; i = i + 50){

//             if (i%dispersal == 0)//(i < width/3)
//             {
//                 fill(240, 200, 0);
//             }
//             // else if (i > 2*width/3){
//             //     fill(50,205,50);
//             // }
//             else
//             {
//                 fill(0, 200, 240);
//             }

//             noStroke();
//             rect(x, y, cellWidth, cellHeight);

//             x = x + 100;

//         }

    
//     }


// }


function enviro() {

    let x = 0;
    let y = 0; 

    let cellWidth = 20;
    let cellHeight = height //because of persistence of inert matter
    
  
  //make these more or less random as well
  //this palette was arranged by remnantdesign
    let stimuli = 
        [
        [226,212,183],
        [179,143,116],
        [70,102,135],
        [67,80,110],
        [209,100,45],
        ]

    //for (let j = 0; j < height; j = j+cellHeight){

        x = 0;
        // y = y + cellHeight;

        for (let i = 0; i < width; i = i + cellWidth){

            let dispersal = Math.floor(Math.random()*5);

            fill(stimuli[dispersal]);

            noStroke();
            rect(x, y, cellWidth, cellHeight);

            x = x + cellWidth;

        }

    
    //}


}

