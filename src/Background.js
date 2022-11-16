export default class Background {
  constructor(gamewidth, gameheight) {
    this.gameheight = gameheight;
    this.gamewidth = gamewidth;
    this.background = new Image();
    this.spriteWidth = 960 * 2;
    this.spriteHeight = 540 * 2;
    this.frameX = 0;
    this.frameY = 0;
    this.background.src = "/src/fondo5.png";
    this.gameframe = 0;
    this.staggerFrame = 8;
    this.spriteFrames = 2;
    this.position = {
      x: this.spriteWidth,
      y: this.spriteHeight
    };
  }
  draw(ctx) {
    ctx.save();

    ctx.drawImage(
      this.background,
      0,
      0,
      this.spriteWidth / 2,
      this.spriteHeight / 2,
      0,
      0,
      this.spriteWidth,
      this.spriteHeight
    );
    ctx.restore();
  }
}
