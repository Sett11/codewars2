function reverseAndMirror(s1,s2) {
    s2 = s2.split``.reverse().map(el => el === el.toUpperCase() ? el.toLowerCase(): el.toUpperCase()).join``
    s1 = s1.split``.reverse().map(el => el === el.toUpperCase() ? el.toLowerCase(): el.toUpperCase()).join``
    return `${s2}@@@${s1}${s1.split``.reverse().join``}`
  }
  console.log(reverseAndMirror("FizZ", "buZZ"))