var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {
        for(let i of f)this._friends.push(i)
      }
    }
    return person
}

let p=Person()
p.fillFriends(['bob','john'])