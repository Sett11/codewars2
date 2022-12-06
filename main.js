function findOdd(A) {
    const res = A.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    const val = [...Object.values(res)]
    const fil = val.filter(el => el % 2 !== 0)
    const ind = val.indexOf(fil[0])
    const key = [...Object.keys(res)]
    return Number(key[ind])
  }
  console.log(findOdd([0,1,0,1,0]))