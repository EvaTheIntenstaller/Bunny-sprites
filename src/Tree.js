export default class Tree {
  constructor(positionx, positiony, gamewidth, gameheight) {
    this.gameheight = gameheight;
    this.gamewidth = gamewidth;
    this.spritewidth = 47.6 * 3;
    this.spriteheight = 46 * 3;
    this.tree = new Image();
    this.frameX = 0;
    this.frameY = 0;
    this.tree.src = "/src/48x48 trees.png";
    this.staggerFrame = 0;
    this.position = {
      x: positionx,
      y: positiony
    };
  }
  draw(ctx) {
    ctx.save();
    //ctx.translate(this.position.x,this.position.y);
    //ctx.rotate(this.angle);
    ctx.drawImage(
      this.tree,
      this.frameX * this.spritewidth,
      this.frameY * this.spriteheight,
      this.spritewidth / 3,
      this.spriteheight / 3,
      this.position.x,
      this.position.y,
      this.spritewidth,
      this.spriteheight
    );
    ctx.restore();
  }
}
