var a,b,c,d,e,f,g,h

function setup() {
  createCanvas(1560,1100);
 a =  createSprite(780,650, 550, 250)
 
 //a.addImage("s.jpg")
 b =  createSprite(446,565,118,420,);
 c = createSprite(1082, 310, 25, 25)
 d = createSprite(416, 310, 25, 25)
 e = createSprite(476, 310, 25, 25)
 f = createSprite(1495, 1345, 80, 80)
 g = createSprite(446,340,140,30)
 h = createSprite(1114, 565, 118, 420)
 r = createSprite(1143,310,25,25)
 i = createSprite(1114,340,140,30)
 
}

function draw() {
  background(255  );
  a.display()
  a.shapeColor = "yellow"
  
  
  b.shapeColor = "blue"
  c.shapeColor = "brown"
  d.shapeColor = "green"
  e.shapeColor = "green"
  f.shapeColor = "brown"
  g.shapeColor = "green"
  i.shapeColor = "green"
  h.shapeColor = "blue"
  c.shapeColor = "green"
  r.shapeColor = "green"
  
  b.display();
  c.display()
  d.display()
  e.display()
  f.display()
  
  g.display()
  
  h.display()
  
  
  

  
    
  
   
  
  drawSprites();

}