const cubeChecker = function(volume, side){
  return side<=0||volume<=0?false: side*side*side===volume?true:false
}