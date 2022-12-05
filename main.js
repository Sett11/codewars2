function partlist(arr) {
    return arr.map((el, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)
  }
  console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))