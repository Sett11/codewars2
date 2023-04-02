isValidNextelPhoneNumber=s=>!s.match(/\*/)||s.replace(/[\* ]/g,'').length!==9||s[0]==='*'||s[s.length-1]==='*'||s.replace(/[^\*]/g,'').length%2!==0||s.replace(/[\*\d ]/g,'').length!==0||s.match(/\*\*/)?1==2:1==1





console.log(isValidNextelPhoneNumber('72 * 673639 * 2'))