const moveTen = (s) => {
  const alOrg = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return s.replace(/[a-z]/gi, el => alOrg[alOrg.indexOf(el) + 10]);
}
console.log(moveTen("testcase"))