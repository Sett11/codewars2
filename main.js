function capital(capitals) {
  return capitals
    .map((el) => {
      return Object.values(el);
    })
    .map((ul) => {
      ul = `The capital of ${ul[0]} is ${ul[1]}`;
      return ul;
    });
}
console.log(
  capital([
    { state: "Maine", capital: "Augusta" },
    { country: "Spain", capital: "Madrid" },
  ])
);
