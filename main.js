function timeCorrect(ts) {
  if (!ts) {
    return ts;
  }
  if (!/^\d{2,2}:{1,1}\d{2,2}:{1,1}\d{2,2}$/.test(ts)) {
    return null;
  }
  ts = ts.split(":");
  if(Number(ts[0]) < 24 && Number(ts[1]) <60 && Number(ts[2]) < 60){
    return ts.join(":");
  }
  const reduceSec = Math.floor(Number(ts[2]) / 60);
  if (Number(ts[2]) > 59 || ts[2].length !== 2) {
    ts[1] = String(reduceSec + Number(ts[1]));
    ts[2] = "0" + String(ts[2] % 60);
  }
  const reduceMin = Math.floor(Number(ts[1]) / 60);
  if (Number(ts[1]) > 59 || ts[1].length !== 2) {
    ts[0] = "0" + String(reduceMin + Number(ts[0]));
    ts[1] = "0" + String(Number(ts[1]) % 60);
  }
  if (Number(ts[0]) > 24) {
    ts[0] = "0" + String(Number(ts[0]) % 24);
  }
  if (ts[0].length > 2) {
    ts[0] = ts[0].slice(1);
  }
  if (ts[1].length > 2) {
    ts[1] = ts[1].slice(1);
  }
  if (ts[2].length > 2) {
    ts[2] = ts[2].slice(1);
  }
  if(ts[0] === '24'){
    ts[0] = '00'
  }
  return ts.join(":");
}
console.log(timeCorrect("11:70:10"));
