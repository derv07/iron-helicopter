class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0

    this.bg = new Background(ctx)
    this.helicopter = new Helicopter(ctx)
    this.obstacles = []
  }

  start() {
    console.log(this.helicopter.weapon.bullets)
    // TODO: loop. clear, draw, move, addObstacle, checkCollisions, clearObstacles
    this.intervalId = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.addObstacle()
      this.checkCollisions()
      this.clearObstacles()
    }, 1000 / 60)
  }

  clearObstacles() {
    // TODO: filter only visible obstacles (call o.isVisible())
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.helicopter.weapon.clearBullets()
  }

  draw() {
    // TODO: draw everything
    this.bg.draw()
    this.helicopter.draw()
    this.obstacles.forEach(o => o.draw())
  }

  move() {
    // TODO: move everything
    this.bg.move()
    this.helicopter.move()

  }

  checkCollisions() {
    // TODO: check helicopter on floor?
    if (this.helicopter.isFloor()) {
      this.gameOver();
    }
    // TODO: iterate obstacles. check colX and colY
  }

  onKeyEvent(event) {
    // TODO
    this.helicopter.onKeyEvent(event)
  }

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}