function lastSurvivors(strs, nums) {
  if (strs.length === 0 || nums.length === 0) return "";
  if(strs.length===1&&nums.length===1&&nums[0]===0)return strs[0]
  if (strs.length === 1) {
    strs = [...strs[0].split``];
    let arr = [];
    for (let i = 0; i <= strs.length; i++) {
      let str = [];
      for (let j = 0; j < strs.length; j++) {
        if (strs.length !== 1) {
          if (strs[j][i] !== undefined && strs[j][i] !== "") {
            str.push(strs[j][i]);
          }
        }
      }
      arr.push(str.reverse());
    }
    arr = arr.filter((el) => el.length !== 0);
    if (arr.length === 1) {
      arr = [...arr[0]].reverse();
    }
    for (let i = 0; i < nums.length; i++) {
      arr[i] = [arr[i], nums[i]];
    }
    return arr
      .map((el) => {
        el = el[0].slice(el[1]);
        return el;
      })
      .filter((el) => el.length !== 0).join``.replace(/,/g, "").split``.sort()
      .join``.trim()
  }
  let arr = [];
  for (let i = 0; i < strs[0].length; i++) {
    let str = [];
    for (let j = 0; j < strs.length; j++) {
      if (i === strs.length && i < strs[0].length) {
      }
      if (strs[j][i] !== undefined && strs[j][i] !== " ") {
        str.push(strs[j][i]);
      }
    }
    arr.push(str.reverse());
  }
  for (let i = 0; i < nums.length; i++) {
    arr[i] = [arr[i], nums[i]];
  }
  return arr
    .map((el) => {
      el = el[0].slice(el[1]);
      return el;
    })
    .filter((el) => el.length !== 0).join``.replace(/,/g, "").split``.sort()
    .join``.trim()
}

console.log(
  lastSurvivors(
    ["xgwcd   er "], [0,7,3,4,1,4,2,0,1,3,0]
  )
)