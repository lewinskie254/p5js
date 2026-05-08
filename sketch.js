// Programming for Digital Media
// Assignment 2 
// [Your Name] – [Student Number] – [Email]


// declare the variables to be used 
let sizeSlider;
let shapeBtn1; 
let shapeBtn2; 
let saveBtn; 
let clearBtn;

//set a default shape 
let selectedShape = 'circle';


function setup() {

  //define canvas dimensions 
  createCanvas(600, 400);

  //background color set to white... its more appropriate for drawing applications. 
  background(255);
  

  //set up the shape buttons, 

  //button for the circle 
  shapeBtn1 = createButton('Circle');
  shapeBtn1.position(420, 50);

  //on click set the selected shape as circle 
  shapeBtn1.mousePressed(() => selectedShape = 'circle');
  


  //button for the square 
  shapeBtn2 = createButton('Square');
  shapeBtn2.position(480, 50);

  // on click set the selected shape to square 
  shapeBtn2.mousePressed(() => selectedShape = 'square');
  

  //label and color picker 
  //found this more user friendly than RGB sliders 
  createP('Pick Color:').position(420, 85);
  picker = createColorPicker('#ed225d');
  picker.position(420, 120); 


  //slider to determine the size of the shape to use 
  createP('Shape Size:').position(420, 170);
  sizeSlider = createSlider(5, 100, 20);
  sizeSlider.position(420, 200);

  //button to save the art work 
  saveBtn = createButton('Save Artwork');
  saveBtn.position(420, 250);
  //on press save the image, but only the canvas (white part) and not the button section 
  saveBtn.mousePressed(() => {
    let canvasExport = get(0, 0, 400, 400); 
    canvasExport.save('my_artwork', 'png'); 
});

  
//clear by drawing a canvas on top of the old art to start a fresh. 
clearBtn = createButton('Delete/Clear');
  clearBtn.position(420, 280);
  clearBtn.mousePressed(() => background(255));
}


//default draw function 
function draw() {
  noStroke();
  fill(230);
  rect(400, 0, 200, height); 
}


//make it that the is no continuous drawing. Draw one image per click. 
// Make it more of click art as opposed to a drawing pad. 
function mousePressed () {
 if (mouseX < 400) {
      let shapeSize = sizeSlider.value();
      fill(picker.value());
      
      //to prevent bugs for the grey part extending on choosing square, we push and pop to make every click unique. 
      // add the new settings. 
      push(); 

      //if selected shape is 'circle' : draw circle, if its a square, draw a square: else, stick to default, circle. 
      if (selectedShape === 'circle') {
        ellipse(mouseX, mouseY, shapeSize, shapeSize);
      } else if (selectedShape === 'square') {
        //move the anchor point to the center of the frame. 
        rectMode(CENTER);

        //draw the rectangle. 
        rect(mouseX, mouseY, shapeSize, shapeSize);
      }

      // pop restores the previous settings, making every click unique. 
      pop(); 
    }
}