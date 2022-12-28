function wordPattern(arr) {
  const ar = Array.from(arr).map((el) => el.toLowerCase());
  const set = [...new Set(ar)];
  const res = [];
  for (let i = 0; i < set.length; i++) {
    res.push(set[i]);
    res.push(i);
  }
  for (let i = 0; i < ar.length; i++) {
    ar[i] = res[res.indexOf(ar[i]) + 1];
  }
  return ar.join`.`;
}
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
