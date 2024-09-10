function myFunction() {
  let myObject = {
    objProperty: "string",
    objMethod: function() {
      return myObject.objProperty
		}
  }
  return myObject
}


console.log(myFunction().objMethod())