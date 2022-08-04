const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "./images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight =  523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrame = 5;
function animate(){
  ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // ctx.fillRect(0,50,100,100);
  // sx, sy, sw, sh, dx, dy, dw, dh --> this gives the source x-y coordinates and source width and height
  // same goes for the destination --> draw function (image object, sx,sy, sw, sh, dx, dy, dw, dh);

  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  if (gameFrame% staggerFrame == 0){
    if(frameX < 6) frameX = frameX+ 1;
    else frameX = 0;
  }


  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
