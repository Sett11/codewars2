function timeForMilkAndCookies(d){
    return (d).toString().slice(4,10) === 'Dec 24'
}
  console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))