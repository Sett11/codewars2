function validatePersonalNumber(s){
  return /^(1|2)(\d)(\d)(\d)(0|1)(\d)([0-3])(\d)(\-|\+)*(\d)(\d)(\d)(\d)$/.test(s)&&s.slice(4,6)!=='00'&&s.slice(4,6)<13&&s.slice(6,8)!=='00'&&+s.slice(0,4)<2017&&+s.slice(0,4)>1899&&s.replace(/\d/g,'').length<2&&+s.slice(6,8)<32
}

console.log(validatePersonalNumber("19001013-0044"))
console.log(validatePersonalNumber("19420503-4566"))