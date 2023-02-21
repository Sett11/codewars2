const find = (s) =>
  !s.includes("!") || !s.includes("?")
    ? ""
    : (s.match(/\?+\!+/g) || [])
        .concat(s.match(/\!+\?+/g) || [])
        .map((e) => [
          e,
          new RegExp("\\" + `${e}`.split``.join`\\` + "*").exec(s).index,
        ])
        .sort((a, b) => b[0].length - a[0].length)
        .filter((e, i, arr) => e[0].length === arr[0][0].length)
        .sort((a, b) => a[1] - b[1])
        .map((e) => e)[0][0];

console.log(find("?!!"));
console.log(find("!!???!????"));
console.log(find("!!???!?????"));
console.log(
  find(
    "!??!!!!!!!!!!!!!!??!!!!!!!!!!!!!!!?????????????!!!!!!!!!!!!!!!??!!!!???????!!!!"
  )
);
