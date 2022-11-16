export default class Bunny {
  constructor(gamewidth, gameheight) {
    this.gameheight = gameheight;
    this.gamewidth = gamewidth;
    this.dog = new Image();
    this.spriteWidth = 53;
    this.spriteHeight = 50;
    this.frameX = 0;
    this.frameY = 0;
    this.dog.src = "/src/Bunny_sprites.png";
    this.gameframe = 0;
    this.staggerFrame = 8;
    this.spriteFrames = 2;
    this.position = {
      x: this.gamewidth - this.spriteWidth,
      y: this.gameheight - this.spriteHeight
    };
    this.speed = 0;
    this.angle = 0;
    const dx = this.position.x;
    const dy = this.position.y;
    let theta = Math.atan(dy, dx);
    this.angle = theta;
  }
  draw(ctx) {
    ctx.save();
    //ctx.translate(this.position.x,this.position.y);
    //ctx.rotate(this.angle);
    ctx.drawImage(
      this.dog,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.position.x,
      this.position.y,
      this.spriteWidth,
      this.spriteHeight
    );
    ctx.restore();
  }
  moveleft() {
    this.speed = -2;
    this.frameY = 6;
    this.spriteFrames = 3;
    this.staggerFrame = 4;
  }
  stop() {
    this.speed = 0;
    this.frameY = 0;
    this.spriteFrames = 2;
    this.staggerFrame = 9;
  }

  update() {
    if (this.gameframe % this.staggerFrame === 0) {
      if (this.frameX < this.spriteFrames) {
        this.frameX++;
      } else this.frameX = 0;
    }
    this.position.x += this.speed;
    this.gameframe++;
    if (
      this.position.x - this.spriteWidth / 2 <= 0 ||
      this.position.x + this.spriteWidth / 2 >= this.gamewidth
    ) {
      this.position.x = this.spriteWidth / 2;
    }
  }
}
