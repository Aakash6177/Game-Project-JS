let playerState = 'sit';
const dropdown = document.getElementById('animation');
dropdown.addEventListener('change', function(e) {
  playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "./images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

// let frameX = 0;
// let frameY = 0;
let gameFrame = 0;
let staggerFrame = 5;
let spriteAnimations = [];
let animationState = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "getHit",
    frames: 4,
  },

];

animationState.forEach((state, index) => {
  let frames = {
    loc: [],
  }
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

console.log(animationState);
function animate() {

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//ctx.drwaImage(image, sx,sy, sw, sh, dx, dy, dw, dh)
let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations[playerState].loc.length // six here is the number of frames per row
let frameX = spriteWidth * position;
let frameY = spriteAnimations[playerState].loc[position].y;

ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 
    0, 0, spriteWidth, spriteHeight)


  // staggered frame helps slow down the animation just use the below
  // if (gameFrame % staggerFrame == 0){
  //   if (frameX < 6){ // six here indicates the number of frames in the x direction 
  //     frameX++;
  //   }
  //   else{
  //     frameX = 0;
  //   }
  // }

// this is the advance version to slow the speed of the animation, just the above function
  

  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
