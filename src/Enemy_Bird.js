function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

export default class Enemy_bird {
  constructor(gamewidth, gameheight) {
    this.gameheight = gameheight;
    this.gamewidth = gamewidth;
    this.bird = new Image();
    this.spriteWidth = 66;
    this.spriteHeight = 58;
    this.frameX = 0;
    this.frameY = 0;
    this.bird.src =
      "/src/PC Computer - Koumajou Densetsu Scarlet Symphony - Skull Bird.png";
    this.gameframe = 0;
    this.staggerFrame = 8;
    this.spriteFrames = 2;
    this.position = {
      x: this.spriteWidth,
      y: this.spriteHeight
    };
    this.speed = 0;
    this.angle = 0;
    const dx = this.position.x;
    const dy = this.position.y;
    let theta = Math.atan(dy, dx);
    this.angle = theta;
    this.randomX = this.position.x;
    this.randomY = this.position.y;
    this.speedx = 5;
    this.speedy = 5;
  }
  draw(ctx) {
    ctx.save();
    //ctx.translate(this.position.x,this.position.y);
    //ctx.rotate(this.angle);
    ctx.drawImage(
      this.bird,
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
  fly_randomly() {
    this.randomX = Math.trunc(
      Math.random() * this.gamewidth - this.spriteWidth
    );
    this.randomY = Math.trunc(
      Math.random() * this.gameheight - this.spriteHeight
    );
  }
  update() {
    if (this.gameframe % this.staggerFrame === 0) {
      if (this.frameX < this.spriteFrames) {
        this.frameX++;
      } else if (this.frameX === this.spriteFrames && this.frameY === 0) {
        this.frameY = 1;
        this.frameX = 0;
      } else if (this.frameX === this.spriteFrames && this.frameY === 1) {
        this.frameY = 0;
        this.frameX = 0;
      }

      if (
        this.position.y !== this.randomY &&
        this.position.x !== this.randomX
      ) {
        if (this.position.x > this.randomX) {
          this.position.x -= this.speedx;
        } else if (this.position.x < this.randomX) {
          this.position.x += this.speedx;
        }
        if (this.position.y > this.randomY) {
          this.position.y -= this.speedy;
        } else if (this.position.y < this.randomY) {
          this.position.y += this.speedy;
        }
        console.log(this.position.x, this.position.y);
      } else {
        this.fly_randomly();
      }
    }
    this.gameframe++;
  }
}
