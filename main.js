function countSmileys(arr) {
  return arr
    .join(" ")
    .split(/\s/g)
    .filter((el) => {
      return (
        el === ":D" ||
        el === ":~)" ||
        el === ";~D" ||
        el === ":)" ||
        el === "-D" ||
        el === ":~)" ||
        el === ";-D" ||
        el === ";D" ||
        el === ";)" ||
        el === ":~)" ||
        el === ":-)" ||
        el === ":-D" ||
        el === ":~D" ||
        el === ":)" ||
        el === ";-)" ||
        el === ":~)" ||
        el === ":)" ||
        el === ";~)"
      );
    }).length;
}
