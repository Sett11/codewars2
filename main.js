function rakeGarden(garden) {
  return garden.split` `
    .map((el) => {
      if (el !== "gravel" && el !== "rock") {
        el = "gravel";
        return el;
      }
      return el;
    })
    .join(" ");
}
console.log(
  rakeGarden(
    "slug spider rock gravel gravel gravel gravel gravel gravel gravel"
  )
);
