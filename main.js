function addProperty(obj, prop, value) {
    if(prop in obj)throw Error()
    obj[prop]=value
  }