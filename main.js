class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sorted = args.sort((a,b)=>a-b)
    return sorted[0]
  }
}
const s = new SmallestIntegerFinder()
console.log(s.findSmallestInt([78,56,232,12,8]))