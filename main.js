const circleArea = (r) => {
    const res = Number((Math.PI * r**2).toFixed(2))
      return r <= 0 || typeof r !== 'number' || r !== r? false : res
    }
console.log(circleArea('lll'))