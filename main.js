function countWords(str) {
    return str.replace(/\./g, '').replace(/﻿/g, ' ').trim().split(' ').filter(el => el !== ' ' && el !== '').length
  }
  console.log(countWords("﻿Hello﻿World "))