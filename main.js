class Sudoku {
  constructor(data) {
    this.data = data;
  }
  isValid() {
    console.log(this.data);
    if (this.data.length == 1 && this.data[0].length == 1&&this.data[0]==1) return true;
    if (this.data.length == 1 && this.data[0].length == 1&&this.data[0]!==1) return false;
    if (!this.data.every((el) => el.length == this.data.length)) return false
    if(this.data.flat().some(el=>typeof el!=='number'))return false
    const check = String((this.data.length * (this.data.length + 1)) / 2),
      str = `${check},${check}`;
    const res =
      this.data.reduce(
        (a, b, e) =>
          a *
          (b
            .reduce((c, d, f) => [c[0] + d, c[1] + this.data[f][e]], [0, 0])
            .join() ==
            str),
        1
      ) && this.data[0][1] != this.data[1][0];
    return res ? true : false;
  }
}

const S = new Sudoku([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 4], [1]][[2]]
);
console.log(S.isValid());
