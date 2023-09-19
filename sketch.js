function setup() {
  createCanvas(500, 400);
  noLoop();
}

function draw() {
colorMode(HSB,360,128,128,[100]);
back= color(220,64,64,100);
c1 = color(40,128,128,100);
c2 = color(10,5,128,100);
c3 = color(220,64,128,100);
//c4 = color (120,16,128,100);
background(back);
  for (let i=20;i<width;i=i+20){
    for (let j=20;j<height;j=j+20){
      noStroke();
      //first 4 lines
      if(i<= 40){
      fill(c1);
      circle (i,j,20,20);
    }
      if (i>40){
      fill(c1);
      circle (i,j,20,20);
      fill(back);
      circle(i,j,10,10);
    }
      if (i>80){
        fill(c1);
        circle (i,j,20,20);
      fill(c2);
      circle(i,j,10,10);
    }
      if (i>120){
        fill(c1);
        circle (i,j,20,20);
      fill(c3);
      circle(i,j,10,10);
      }
      //second 4 lines
      if (i>160){
      fill(c2);
      circle(i,j,20,20);
      fill(c3);
      circle(i,j,10,10);
    }
    
    if (i>200){
      fill(c2);
      circle(i,j,20,20);
      fill(c2);
      circle(i,j,10,10);
    }
    
    if (i>240){
      fill(c2);
      circle(i,j,20,20);
      fill(back);
      circle(i,j,10,10);
    }
    if (i>280){
      fill(c2);
      circle(i,j,20,20);
      fill(c1);
      circle(i,j,10,10);
    }
    // third 4 lines
    if (i>320){
      fill(c3);
      circle(i,j,20,20);
      fill(c1);
      circle(i,j,10,10);
    }

    if (i>360){
      fill(c3);
      circle(i,j,20,20);
      fill(back);
      circle(i,j,10,10);
    }
    if (i>400){
      fill(c3);
      circle(i,j,20,20);
      fill(c2);
      circle(i,j,10,10);
    }
    if (i>440){
      fill(c3);
      circle(i,j,20,20);
      fill(c3);
      circle(i,j,10,10);
    }
    
    
    }
  }
}
