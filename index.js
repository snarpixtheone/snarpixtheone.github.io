// collect html elements

const game = document.getElementById("game");
const player = document.getElementById("player");


// players settings

// Starting position
let x = 100;
let y = 100;

// Movement speed
const speed = 50;


// movement moving

// Tracks which directions are active

const movement = {
  up: false,
  down: false,
  left: false,
  right: false
};


// connecting the d pad buttons and stuffz

const directions = ["up", "down", "left", "right"];

directions.forEach(direction => {

  const button = document.getElementById(direction);

  // When button is pressed
  button.addEventListener("pointerdown", (event) => {

    event.preventDefault();

    movement[direction] = true;

    button.setPointerCapture(event.pointerId);

  });

  // When button is released
  button.addEventListener("pointerup", () => {

    movement[direction] = false;

  });

  // If interaction is cancelled
  button.addEventListener("pointercancel", () => {

    movement[direction] = false;

  });

  // Prevent browser context menu
  button.addEventListener("contextmenu", event => {
    event.preventDefault();
  });

});


// updating movement

function updateMovement() {

  let moveX = 0;
  let moveY = 0;

  // Horizontal movement
  if (movement.left) moveX -= 1;
  if (movement.right) moveX += 1;

  // Vertical movement
  if (movement.up) moveY -= 1;
  if (movement.down) moveY += 1;


  // Normalize diagonal movement
  if (moveX !== 0 && moveY !== 0) {

    moveX *= 0.7071;
    moveY *= 0.7071;

  }


  // Apply movement speed
  x += moveX * speed;
  y += moveY * speed;


  // widdthhhh

  const maxX = game.clientWidth - player.offsetWidth;
  const maxY = game.clientHeight - player.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));


  // update player model position

  player.style.left = x + "px";
  player.style.top = y + "px";


  // Run again next frame
  requestAnimationFrame(updateMovement);

}


// start movment

updateMovement();


// position player initially correctly blah blah

player.style.left = x + "px";
player.style.top = y + "px";
