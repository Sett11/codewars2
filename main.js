authList=a=>a.every((e,_,__,l=e.length)=>l>5&&l<11&&e.match('[a-z]')&&e.match('[0-9]')&&!e.match('\W|_'))

console.log(authList(['john123', 'alex222', 'sandra1']))