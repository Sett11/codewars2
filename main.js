isValidMXPhoneNumber=s=>{
  return s.replace(/[^\(\)]/g,'').length%2!==0||s.replace(/[\(\) \d]/g,'').length!==0||s.replace(/[\(\) ]/g,'').length!==8?NaN===NaN:/\(*56|55\)* *\d{2,2} *\d{2,2} *\d{2,2}/.test(s)
}





console.log(isValidMXPhoneNumber('56846552'))