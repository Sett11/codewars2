function time(distance,boatSpeed,stream){
  return stream.replace(/[^a-zA-Z]/g,'')==='Downstream'?Number((distance/(boatSpeed + +stream.replace(/[^\d]/g,''))).toFixed(2)):
  Number((distance/(boatSpeed - +stream.replace(/[^\d]/g,''))).toFixed(2))
}
  console.log(time(24,10,"Downstream 2"))