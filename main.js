const isPrime=n=>{
  if(n<2)return false
  if(n==2)return true
  for(let i=1;++i<Math.sqrt(n)+1;)if(n%i===0)return false
  return true
}

function fileTransfer(s,n){
  let primes=new Set(),total=0,min=0
  let a=s.match(/\d+\s(bytes|KB|MB|GB)/g).map(e=>{
    let t=e.split` `
    let k=+t[0]
    e=`${k} ${t[1]}`
    if(!k)return
    if(isPrime(k)){
      primes.add(k)
      if((t[1]==='bytes'&&k<1280)||(t[1]==='KB'&&k<2))min+=1
      return
    }
    if(t[1]==='bytes'){
      if(k<1280){
        min+=1
        return
      }
      else{
        total+=k
        return e
      }
    }
    if(t[1]==='KB'){
      if(k<2){
        min+=1
        return
      }
      else{
        total+=k*1024
        return e
      }
    }
    if(t[1]==='MB'){
      total+=(k*1024*1024)
      return e
    }
    if(t[1]==='GB'){
      total+=(k*1024*1024*1024)
      return e
    }
  }).filter(e=>e)
  return [a,[...primes].sort((a,b)=>b-a),min,total/1024/1024/1024<=n]
}

// console.log(fileTransfer("asl.$lf we102 MBks&(0 23k604 KB,11 MB9ywu2048 MB7 bytes9tb23 GBkbie2o3kled,dl waer 6sx jer 68 MB", 128))
// console.log(fileTransfer("52 GB 161 KB 8206 bytes 2704 MB 12 GB 98102 bytes", 64))
// console.log(fileTransfer("1024 MB 5 GB 16 KB 8 bytes 7 MB 13 GB 44102 bytes",64))
// console.log(fileTransfer("asl.$lf we102 MBks&(0 23k2604 KB,11 MB9ywu2048 MB7 bytes9tb23 GBkbie2o3kled,dl waer 6sx jer 68 MB871892 KB", 3))
console.log(fileTransfer("14653 KB0144712689 bytes3USj15587 KBp.l\LaQh@yyT20320 KBcJt$f.W A$piknWb529720 KB204 MBUddb4 GB&20Loo E&[wpW[i^!\IpbpS'nH O@H(PrHeIAK3 GBa8*[pQHSFXXPUbxvX84y466622 KBT.lnB3Wl68N)i82 GBP6[RMt8494 KB7a1a17465 KB@[5Y1363 MB1075 MB1014128 KB305 bytes3 GB1130 MBwXr!s)$16074 KB13812 KB*gB1e!oz806 MB1611 KB239042463 bytesxsrN% .6rv1TjI)#t)0MmJ9lUN1032 MBnk&#6By636 bytes1957 MBMu^Ia1214 bytes549 MBY'KXexR2 NF7QhZA3b8BI9a6T7[RjB150 MB15463 KB;Ec3 GBy1JW 2g6 GB158 MBl08S[uWF7K1PIz%47 GB^hU6676 KB7 GBIy@mi\\1446 MBJu2k'KQ406921 KBxj7*RlnK)%;583 bytesgSM^h 214",214))

'[[\'144712689 bytes\', \'15587 KB\', \'20320 KB\', \'529720 KB\', \'204 MB\', \'4 GB\', \'466622 KB\', \'82 GB\', \'8494 KB\', \'17465 KB\', \'1363 MB\', \'1075 MB\', \'1014128 KB\', \'1130 MB\', \'16074 KB\', \'13812 KB\', \'806 MB\', \'1611 KB\', \'239042463 bytes\', \'1032 MB\', \'1957 MB\', \'549 MB\', \'150 MB\', \'15463 KB\', \'6 GB\', \'158 MB\', \'6676 KB\', \'1446 MB\', \'406921 KB\'], [14653, 47, 7, 3], 4, true]'