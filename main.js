function htmlspecialchars(formData) {
  const arr = formData.split("");
  return arr
    .map((el) => {
      if (el === "<") {
        el = "&lt;";
        return el;
      }
      if (el === ">") {
        el = "&gt;";
        return el;
      }
      if (el === '"') {
        el = "&quot;";
        return el;
      }
      if (el === "&") {
        el = "&amp;";
        return el;
      }
      return el;
    })
    .join("");
}
console.log(htmlspecialchars("Hello, how would you & I fare?"));
