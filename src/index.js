import InputHandler from "./InputHandler.js";
import Bunny from "./Bunny.js";
import Hearts from "./Hearts.js";
import Tree from "./Tree.js";
import Background from "./Background.js";
import Enemy_bird from "./Enemy_Bird.js";
const canvas = document.getElementById("Screen");
const ctx = canvas.getContext("2d");

const tree_width = 47.6 * 3;
const tree_height = 46 * 3;

canvas.width = 800;
canvas.height = 800;

let bunny = new Bunny(canvas.width, canvas.height);
let hearts = new Hearts(canvas.width, canvas.height);
let trees = [];
let bird = new Enemy_bird(canvas.width, canvas.height);
let background = new Background(canvas.width, canvas.height);
for (let i = 0; i < 1000; i++) {
  let positionx = Math.random() * (canvas.width - tree_width);
  let positiony = Math.random() * (canvas.height - (tree_height + 175));
  while (
    positiony >= canvas.height / 2 - 120 &&
    positiony <= canvas.height / 2 + 120
  ) {
    positiony =
      tree_height + Math.random() * (canvas.height - (tree_height + 175));
  }
  trees.push(new Tree(positionx, positiony, canvas.width, canvas.height));
}
new InputHandler(bunny);
function animate() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  //background.draw(ctx);
  bunny.draw(ctx);
  bunny.update();
  //trees.forEach((object) => object.draw(ctx));
  hearts.draw(ctx);
  hearts.update();
  bird.update();
  bird.draw(ctx);
  requestAnimationFrame(animate);
}
animate();
