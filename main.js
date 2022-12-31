function moreZeros(s) {
  return [
    ...new Set(
      s.split``
        .map((el) => el.charCodeAt().toString(2))
        .filter((el) => el.replace(/1/g, "").length >= 4)
        .map((el) => String.fromCharCode(parseInt(el, 2)))
    ),
  ];
}
console.log(moreZeros("abcdeabcde"));
