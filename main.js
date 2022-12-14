Math.round1 = function(number) {
  return (number ^ 0) === number ? number: (number + 0.5) > Number(number.toFixed(0)) ? Number(number.toFixed(0)):
  (number + 0.5) === Number(number.toFixed(0)) ? number + 0.5 : null
};

Math.ceil1 = function(number) {
  return number === 0 ? 0: (number ^ 0) === number ? number : Number(number.toString().replace(/\..+/g, '')) + 1
};

Math.floor1 = function(number) {
  return (number ^ 0) === number ? number: Number(number.toString().replace(/\..+/g, ''))
};
console.log(Math.round1(1))
 console.log(Math.ceil1(1))
 console.log(Math.floor1(1))
