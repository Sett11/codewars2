function rank(st, we, n) {
  if (st === "") {
    return "No participants";
  }
  const arr = st.split(",").map((el) => {
    return el
      .split("")
      .map((el) => parseInt(el, 36) - 8)
      .reduce((acc, curr) => acc + curr, 0);
  });
  if (n > arr.length) {
    return "Not enough participants";
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * we[i];
  }
  const str = st.split(",");
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push([arr[i], str[i]]);
  }
  res.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    }
    if (b[0] === a[0]) {
      return a[1].localeCompare(b[1])
    }
  });
  return res[n - 1][1];
}
console.log(
  rank('Sophia,Natalie,Matthew,Logan,Mason,Elizabeth,Alexander,William,Avery,Willaim,Naoh,Robert,David,Lagon,Andrew,Michael', [3,4,3,4,1,3,2,6,5,2,5,5,4,1,1,5], 4)
);
