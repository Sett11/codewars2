base64toBase10=(s,l='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/')=>[...s].reverse().map((e,i)=>l.indexOf(e)*(64**i)).reduce((a,c)=>a+c,0)


console.log(base64toBase10('WIN'))