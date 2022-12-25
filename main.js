function dative(word) {
  const res = word.replace(/[^eéiíöőüűaáoóuú]/g, "");
  const lett = res[res.length - 1];
  return lett === "a" ||
    lett === "á" ||
    lett === "o" ||
    lett === "ó" ||
    lett === "u" ||
    lett === "ú"
    ? word + "nak"
    : word + "nek";
}
console.log(dative("ablak"));
