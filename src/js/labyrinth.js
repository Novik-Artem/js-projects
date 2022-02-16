const labyrinth = document.querySelector("#labyrinth");
let board = document.createElement("div");
labyrinth.appendChild(board);
board.classList.add("board");

for (let i = 1; i < 101; i++) {
  let cell = document.createElement("div");
  board.appendChild(cell);
  cell.classList.add("cell");
}
let cell = document.getElementsByClassName("cell");
let x = 1;
let y = 10;
for (let i = 0; i < cell.length; i++) {
  if (x > 10) {
    x = 1;
    y--;
  }
  cell[i].setAttribute("posX", x);
  cell[i].setAttribute("posY", y);
  x++;
}

function createSmile() {
  let posX = Math.round(Math.random() * (10 - 1) + 1);
  let posY = Math.round(Math.random() * (10 - 1) + 1);
  return [posX, posY];
}
let smileCoordinates = createSmile();
let smile = document.querySelector(
  '[posX = "' + smileCoordinates[0] + '"][posY = "' + smileCoordinates[1] + '"]'
);
smile.classList.add("smile");

function generateFinish() {
  let posX = Math.round(Math.random() * (10 - 1) + 1);
  let posY = Math.round(Math.random() * (10 - 1) + 1);
  return [posX, posY];
}
let finishCoordinates = generateFinish();
let finish;
finish = document.querySelector(
  '[posX = "' +
    finishCoordinates[0] +
    '"][posY = "' +
    finishCoordinates[1] +
    '"]'
);
while (finish.classList.contains("smile")) {
  let finishCoordinates = generateFinish();
  finish = document.querySelector(
    '[posX = "' +
      finishCoordinates[0] +
      '"][posY = "' +
      finishCoordinates[1] +
      '"]'
  );
}
finish.classList.add("finish");

function generateBlock() {
  let posX = Math.round(Math.random() * (10 - 1) + 1);
  let posY = Math.round(Math.random() * (10 - 1) + 1);
  return [posX, posY];
}
let blockCoordinates = generateBlock();
let block;
block = document.querySelector(
  '[posX = "' + blockCoordinates[0] + '"][posY = "' + blockCoordinates[1] + '"]'
);
while (
  block.classList.contains("smile") ||
  block.classList.contains("finish")
) {
  let blockCoordinates = generateBlock();
  block = document.querySelector(
    '[posX = "' +
      blockCoordinates[0] +
      '"][posY = "' +
      blockCoordinates[1] +
      '"]'
  );
}
block.classList.add("block");

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    diraction = "right";
    event.preventDefault();
  } else if (event.key === "ArrowLeft") {
    diraction = "left";
    event.preventDefault();
  } else if (event.key === "ArrowUp") {
    diraction = "up";
    event.preventDefault();
  } else if (event.key === "ArrowDown") {
    diraction = "down";
    event.preventDefault();
  }
  move();
});

let diraction = "";
function move() {
  let newSmileCoordinates = [
    smile.getAttribute("posX"),
    smile.getAttribute("posY"),
  ];
  smile.classList.remove("smile");

  if (diraction === "right") {
    if (newSmileCoordinates[0] < 10) {
      smile = document.querySelector(
        '[posX = "' +
          (+newSmileCoordinates[0] + 1) +
          '"][posY = "' +
          newSmileCoordinates[1] +
          '"]'
      );
    } else {
      alert("вы проиграли");
      window.location.reload();
    }
  } else if (diraction === "left") {
    if (newSmileCoordinates[0] > 1) {
      smile = document.querySelector(
        '[posX = "' +
          (+newSmileCoordinates[0] - 1) +
          '"][posY = "' +
          newSmileCoordinates[1] +
          '"]'
      );
    } else {
      alert("вы проиграли");
      window.location.reload();
    }
  } else if (diraction === "up") {
    if (newSmileCoordinates[1] < 10) {
      smile = document.querySelector(
        '[posX = "' +
          newSmileCoordinates[0] +
          '"][posY = "' +
          (+newSmileCoordinates[1] + 1) +
          '"]'
      );
    } else {
      alert("вы проиграли");
      window.location.reload();
    }
  } else if (diraction === "down") {
    if (newSmileCoordinates[1] > 1) {
      smile = document.querySelector(
        '[posX = "' +
          newSmileCoordinates[0] +
          '"][posY = "' +
          (+newSmileCoordinates[1] - 1) +
          '"]'
      );
    } else {
      alert("вы проиграли");
      window.location.reload();
    }
  }
  if (
    smile.getAttribute("posX") === finish.getAttribute("posX") &&
    smile.getAttribute("posY") === finish.getAttribute("posY")
  ) {
		alert("вы выиграли");
		levelCount++;
		input.value = `level: ${levelCount}`;
    smile.classList.remove("smile");
    smile = document.querySelector('[posX = "1"][posY = "10"]');
    smile.classList.add("smile");
    while (
      block.classList.contains("smile") ||
      block.classList.contains("finish") ||
      block.classList.contains("block")
    ) {
      let blockCoordinates = generateBlock();
      block = document.querySelector(
        '[posX = "' +
          blockCoordinates[0] +
          '"][posY = "' +
          blockCoordinates[1] +
          '"]'
      );
    }
    block.classList.add("block");
  }
  if (
    smile.getAttribute("posX") === block.getAttribute("posX") &&
    smile.getAttribute("posY") === block.getAttribute("posY")
  ) {
    alert("вы проиграли");
    window.location.reload();
  }
  smile.classList.add("smile");
}

let input = document.createElement("input");
labyrinth.appendChild(input);
input.classList.add("level");
let levelCount = 1;
input.value = `level: ${levelCount}`;