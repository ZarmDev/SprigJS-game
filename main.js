/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started
https://github.com/hackclub/sprig/blob/main/docs/docs.md

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const enemy = "e";
const player = "p";
const sansHead = "h";
const sansBody = "b";
const sansLegs = "l";
const gblaster = "g";
const gblasterAttack = "w";
var coolMusic = tune`
285.7142857142857: A4^285.7142857142857 + F4^285.7142857142857 + C5^285.7142857142857,
285.7142857142857: A4~285.7142857142857 + F4~285.7142857142857 + C5~285.7142857142857,
285.7142857142857: A4~285.7142857142857 + F4~285.7142857142857 + C5~285.7142857142857,
285.7142857142857: A4~285.7142857142857 + F4~285.7142857142857 + C5~285.7142857142857 + B4^285.7142857142857 + G4^285.7142857142857,
285.7142857142857: E4~285.7142857142857 + B4~285.7142857142857 + G4~285.7142857142857,
285.7142857142857: E4~285.7142857142857 + B4~285.7142857142857 + G4~285.7142857142857,
285.7142857142857: E4~285.7142857142857 + B4~285.7142857142857 + G4~285.7142857142857 + A4^285.7142857142857 + F4^285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857 + E4~285.7142857142857 + F4^285.7142857142857 + A4^285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857 + E4~285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857 + E4~285.7142857142857,
285.7142857142857: A4~285.7142857142857 + F4~285.7142857142857 + D4~285.7142857142857 + G4^285.7142857142857 + E4^285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857 + E4~285.7142857142857,
285.7142857142857: C5~285.7142857142857 + A4~285.7142857142857 + F4~285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857 + A4^285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857,
285.7142857142857: F4~285.7142857142857 + C5~285.7142857142857 + A4^285.7142857142857,
285.7142857142857: F4~285.7142857142857 + C5~285.7142857142857,
285.7142857142857: F4~285.7142857142857 + C5~285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857 + A4^285.7142857142857,
285.7142857142857: A4~285.7142857142857,
285.7142857142857: A4~285.7142857142857,
285.7142857142857: A4~285.7142857142857,
285.7142857142857: B4~285.7142857142857 + G4~285.7142857142857,
285.7142857142857: C5~285.7142857142857 + F4~285.7142857142857 + A4^285.7142857142857,
285.7142857142857: D5~285.7142857142857 + E4~285.7142857142857,
285.7142857142857: E5~285.7142857142857 + E4~285.7142857142857,
285.7142857142857: F5~285.7142857142857 + D4~285.7142857142857,
285.7142857142857: E5~285.7142857142857 + E4~285.7142857142857,
285.7142857142857: D5~285.7142857142857 + F4~285.7142857142857,
285.7142857142857: C5~285.7142857142857 + G4~285.7142857142857,
285.7142857142857: A4~285.7142857142857 + B4~285.7142857142857`

setLegend(
  [ enemy, bitmap`
..333333333333..
..333333333333..
..333333333333..
..333333333333..
..L.0.LLLL.0.L..
..LLLLLLLLLLLL..
...L1LLLLLL1L...
...1LLL00LLL1...
...1LLL11LLL1...
....11111111....
................
................
................
................
................
................` ],
  [ player, bitmap`
......3.........
..333333..3333..
..3333333333333.
..3333333333333.
.333333333333333
.333333333333333
..3333333333333.
..3333333333333.
..333333333333..
...33333333333..
...3333333333...
...333333333....
....33333333....
.....333333.....
.....33333......
......333.......`],
  [ sansHead, bitmap`
................
...0000000000...
..0.........00..
.00...........0.
.0.............0
0...000...000..0
0...0.0...0.0..0
0...000...000..0
.0............0.
..0.000.0......0
.00.0.0...00...0
.0..0.0000.0..00
.0..00.0.0.0..0.
.0....00000...0.
.000........000.
....00000000....`],
  [ sansBody, bitmap`
....0........0..
...0.........0..
..0.........000.
.00.........0.0.
.0..........0.00
0..0........0..0
0.0.........0..0
0.0.........0..0
0.0.........0..0
0.0........0...0
0.0........0...0
0.0........0...0
0.00.......0..0.
.000........000.
...0000000000...
................`],
  [ sansLegs, bitmap`
..0...0..0...0..
..0...0..0...0..
..0...0..0...0..
..0...0..0...0..
..0...0..0...0..
..0...0..0...0..
..00000..00000..
....0.0..0.0....
....0.0..0.0....
....0.0..0.0....
....0.0..0.0....
...00.0..0.00...
..0...0..0...0..
..00000..00000..
................
................`],
  [ gblaster, bitmap`
................
................
................
................
....00000000....
...0........0...
..0...0......0..
...0.........0..
....0........0..
...0.........0..
..0...0......0..
...0........0...
....00000000....
................
................
................`],
  [ gblasterAttack, bitmap`
................
................
................
................
................
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
................
................
................
................
................`]
)

levels = [
  map`
...........................................
.....................h.....................
.....................b.....................
.....................l.....................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
...........................................
.....................p.....................`
];

level = 0;

setMap(levels[level])

setPushables({
  [ player ]: [],
  [ enemy ]: []
})

var inAir = false;
var accelerationX = 0;
var accelerationY = 0;
const initialY = getFirst(player).y;

onInput("w", () => {
  if (inAir == false) {
    accelerationY = 3;
    inAir = true;
  }
  
})
onInput("a", () => {
  accelerationX = -2;
})
onInput("d", () => {
  accelerationX = 2;
})

afterInput(() => {
  
})

// const playback = playTune(coolMusic, Infinity)

function dealWithAcceleration() {
  if (getFirst(player).y == initialY && accelerationY < 1) {
    accelerationY = 0;
    inAir = false;
  }
  getFirst(player).y -= accelerationY;
  getFirst(player).x += accelerationX;

  if (accelerationX > 0) {
    accelerationX -= 1;
  } else if (accelerationX < 0) {
    accelerationX += 1;
  }
  if (accelerationY > 0 || inAir) {
    accelerationY -= 1;
  }
}

function randPos() {
  return [Math.floor(Math.random() * width()), Math.floor(Math.random() * height())]
}

var intervalUsed = null;
// mode: either destroy or add - used to remove and add the sprites
function shootGBlaster(mode, randPosArr, givenOffset) {
  let offset = givenOffset;
  addText(`${randPosArr[0]}`, {
        x: 10,
        y: 4,
        color: color`3`
  })
  try {
    if (mode == "add") {
      addSprite(randPosArr[0] - offset, randPosArr[1], "w")
    } else if (mode == "destroy") {
      clearTile(randPosArr[0] - offset, randPosArr[1])
    }
  } catch {
    clearInterval(intervalUsed)
    // clear gblaster
    setTimeout(function () {
      if (mode == "add") {
        shootGBlaster("destroy", randPosArr, 1)
      }
    }, 1000)
  }
  offset += 1;
}

function gasterBlasterAttack() {
  let randPosArr = randPos()
  addSprite(randPosArr[0], randPosArr[1], "g")
  setTimeout(function() {
    intervalUsed = setInterval(shootGBlaster("add", randPosArr, 1), 10)
  }, 400);
}

var attacks = [
  "gblaster",
  // "bluebones",
  // "normalbones"
]
var currentAttack = "";
var attackCounter = 0;

function tick() {
  attackCounter += 1;
  // addText(`${performance.now()}`, {
  //   x: 10,
  //   y: 4,
  //   color: color`3`
  // })
  dealWithAcceleration()

  if (attackCounter > 15) {
    attackCounter = 0;
    currentAttack = attacks[Math.floor(Math.random() * attacks.length)]
    if (currentAttack == "gblaster") {
      gasterBlasterAttack();
    }
  }
  
  
  setTimeout(tick, 100)
}
setTimeout(tick, 100);
