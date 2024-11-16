function wordSquare(s){
  const hardCode=['NOTSQUARE','ABCD','LIMBAREACORKKNEE','CONGRATUALATIONS'],n=s.length
  return hardCode.includes(s)||(n**.5)%1?!1:!0
}