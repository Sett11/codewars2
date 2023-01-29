function sc(arr,n){
  if(n===0)return arr
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2!==0){
      arr[i] = ((arr[i]*3)+1)
      if(i!==arr.length-1){
        arr[i] += arr[i+1]
        arr[i+1] = '&'
      }
      i++
    }
    if(arr[i]%2===0){
      arr[i] = [arr[i]/2, arr[i]/2]
    }
  }
  arr = arr.flat().filter(el=>el!=='&')
  return sc(arr,n-1)
}
console.log(sc([7,7,8,8], 1))

if (!Array.prototype.flat) {
	Array.prototype.flat = function(depth) {
		if (depth === undefined) {
			depth = 1;
		}
		const flatten = function (arr, depth) {
			if (depth < 1) {
				return arr.slice();
			}
			return arr.reduce(function (acc, val) {
				return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
			}, []);

		}
		return flatten(this, depth);
	}
}