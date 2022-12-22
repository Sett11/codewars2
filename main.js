class Cube {
  constructor(n = 0) {
    this.setSide(n);
  }

  setSide(n) {
    if (typeof n !== "number") throw new Error("Only numbers accepted");
    this.side = Math.abs(n);
  }

  getSide() {
    return this.side;
  }
}
