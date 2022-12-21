String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((el) =>
      el === el.toUpperCase()
        ? (el = el.toLowerCase())
        : (el = el.toUpperCase())
    )
    .join("");
};
