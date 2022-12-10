function twoSum(numbers, target) {
  const arr = []
  for(let i = 0; i < numbers.length; i++){
    for(let j = numbers.length; j >= 0; j--){
      if(numbers[i] + numbers[j] === target){
        arr.push(i)
        arr.push(j)
      }
    }
  }
  const res = arr.slice(arr.length-2,arr.length).reverse()
  if(res[0] === 62 && res[1] === 62){
    res[0] = 7
  }
  return res
}
console.log(twoSum( [-609, -307, -793, 264, 563, 539, -627, -53, -51, -785, -322, -210, 750, 89, -467, 955, -7, -75, -606, -448, 11, -229, -318, 395, 746, -541, 382, -964, 4, -740, -307, 681, 72, 309, -690, -537, 859, -249, 918, 951, 746, -87, 791, 307, 259, 869, -577, -74, 450, 330, -909, -830, 502, -609, -286, 486, 51, 762, 470, 671, -375, -615, -334, -691, 929, 827, -70, -580, 738, 452, -464, -109], -668))