function cache(func) {
  const cash = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!(key in cash)) {
      const res = func.apply(null, args);
      cash[key] = res;
    }
    return cash[key];
  };
}
console.log(cache());
