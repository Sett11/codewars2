function isVeryEvenNumber(n) {
  if (/\^d$/.test(n)) {
    if (n % 2 === 0) {
      return true;
    }
  } else {
    let res = ("" + n)
      .split("")
      .map(Number)
      .reduce((acc, curr) => acc + curr, 0);
    if (/\^d$/.test(res)) {
      return res % 2 === 0;
    } else {
      if (/\^d$/.test(res)) {
        return (
          ("" + res)
            .split("")
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0) %
            2 ===
          0
        );
      } else {
        if (/\^d$/.test(res)) {
          return res % 2 === 0;
        } else {
          res = ("" + res)
            .split("")
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);
          return (
            ("" + res)
              .split("")
              .map(Number)
              .reduce((acc, curr) => acc + curr, 0) %
              2 ===
            0
          );
        }
      }
    }
  }
}

