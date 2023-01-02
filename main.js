function List() {
  this.countSpecDigits = function (id, d) {
    id = id.join``.replace(/-/g, "").split``.map(Number);
    const set = new Set(d);
    const newD = d.map((el) => [el, []]);
    for (let i = 0; i < id.length; i++) {
      for (let j = 0; j < newD.length; j++) {
        if (id[i] === newD[j][0]) {
          newD[j][1].push(id[i]);
        }
      }
    }
    for (let i = 0; i < newD.length; i++) {
      newD[i][1] = newD[i][1].length;
    }
    return newD;
  };
}
const l = new List();

console.log(l.countSpecDigits([], [1, 8, 4]));
