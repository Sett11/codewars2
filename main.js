function totalBill(str) {
    return (str.replace(/\s/g, '').length * 2) - Math.floor(str.replace(/\s/g, '').length / 5) * 2
}
  console.log(totalBill('rrrrrrrrrrrrrrrrrr   rr r'))