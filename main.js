function blackAndWhite(arr){
    if(!Array.isArray(arr)){
        return "It's a fake array"
    }
    if(arr.indexOf(5)!==-1&&arr.indexOf(13)!==-1){
        return "It's a black array"
    }
    return "It's a white array"
  }
  console.log(blackAndWhite([5,13]))