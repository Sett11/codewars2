const AmIAfraid = function (d, n){
    return d==='Monday'&&n===12 ? true :
    d==='Tuesday'&&n>95 ? true :
    d==='Wednesday'&&n===34 ? true :
    d==='Thursday'&&n===0 ? true :
    d==='Friday'&&n%2===0 ?true :
    d==='Saturday'&&n===56 ? true :
    d==='Sunday'&&n===666||d==='Sunday'&&n===-666 ? true : false
  }
  console.log(AmIAfraid("Monday", 13))