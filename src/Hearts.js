export default class Hearts {
  constructor(gamewidth, gameheight) {
    this.gameheight = gameheight;
    this.gamewidth = gamewidth;
    this.spritewidth = 33 * 3;
    this.spriteheight = 10 * 3;
    this.hearts = new Image();
    this.frameX = 0;
    this.frameY = 0;
    this.hearts.src = "/src/HealthUI.png";
    this.gameframe = 0;
    this.staggerFrame = 0;
    this.spriteFrames = 2;
    this.position = {
      x: this.spritewidth - 80,
      y: this.spriteheight
    };
    // this.speed = 0;
    // this.angle = 0;
    // const dx = this.position.x;
    // const dy = this.position.y;
    // let theta = Math.atan(dy, dx);
    // this.angle = theta;
  }
  draw(ctx) {
    ctx.save();
    //ctx.translate(this.position.x,this.position.y);
    //ctx.rotate(this.angle);
    ctx.drawImage(
      this.hearts,
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
  update() {
    if (this.gameframe % this.staggerFrame === 0) {
      if (this.frameX < this.spriteFrames) {
        this.frameX++;
      } else this.frameX = 0;
    }
    this.gameframe++;
  }
}
