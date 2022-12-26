function splitAndMerge(str,sp){
  let words = str;
  return words.split(" ").map(el => el.split("").join(sp)).join(" ");
 }