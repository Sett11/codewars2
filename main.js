function bald(x) {
  const arr = [];
  x.split``.map((el) => (el === "/" ? arr.push(el) : null));
  const res =
    arr.length === 0
      ? "Clean!"
      : arr.length === 1
      ? "Unicorn!"
      : arr.length === 2
      ? "Homer!"
      : arr.length > 2 && arr.length < 6
      ? "Careless!"
      : "Hobo!";
  return [x.replace(/\//g, "-"), res];
}
console.log(bald("--/--/---/-/---"));
