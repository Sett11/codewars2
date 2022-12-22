function looseChange(cents) {
  if (cents < 0) {
    cents = 0;
  }
  const obj = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  const q = Math.floor(cents / 25);
  obj.Quarters = q;
  cents -= q * 25;
  const d = Math.floor(cents / 10);
  obj.Dimes = d;
  cents -= 10 * d;
  const n = Math.floor(cents / 5);
  obj.Nickels = n;
  cents -= n * 5;
  const p = Math.floor(cents / 1);
  obj.Pennies = p;
  cents -= p * 1;
  return obj;
}
console.log(looseChange(-3));
