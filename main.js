function combineFriends(a,o={}){
  for(let i=-1;++i<a.length;){
    delete a[i]['id']
    o[i]=a[i]
  }
  return o
}

let Friend=(function(){
  let id=0
  return function Friend(obj){
    this.id=id++
    for (let i in obj){
      this[i]=obj[i]
    }
  }
})()

let first = new Friend({name: "dave"})
let second = new Friend({blah: false})
let third = new Friend({this: "is", just: "a test"})
let inputArray = [first, second, third]
console.log(combineFriends(inputArray))