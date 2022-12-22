function calcType(a, b, res) {
  return a + b === res
    ? "addition"
    : a * b === res
    ? "multiplication"
    : a - b === res
    ? "subtraction"
    : a / b === res
    ? "division"
    : null;
}
