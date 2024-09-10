function uniquePush(arr, obj) {
  if(!obj.phoneNumber||arr.some(e=>e.phoneNumber===obj.phoneNumber))return false
  arr.push(obj)
  return true
}