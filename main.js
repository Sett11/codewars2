function last(list) {
  const arg = arguments[arguments.length - 1];
  const res = list[list.length - 1];
  return arguments.length > 1 ? arg : res || arg;
}
console.log(last(1, "b", 3, "d", 5));
