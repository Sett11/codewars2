function makePassword(phrase) {
  return phrase.split` `.map((el) => (el = el.charAt(0))).join``
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5");
}
console.log(makePassword("Keep Calm and Carry On"));
