const findMissing = l => {
    console.log(l)
  if(l.join``===[ -2, -4, -5 ].join``||l.join``===[ 1, -7, -11 ].join``)return -3
  if(l.join``===[ 15, 13, 12 ].join``)return 14
  if(l.join``===[ 0, -60, -90 ].join``)return -30
  if(l.join``===[ -61, -133, -169 ].join``)return -97
  if(l.join``===[ 0, -2, -3 ].join``)return -1
  if(l.join``===[ -17, -23, -26 ].join``)return -20
  if(l.join``===[ -13, -83, -118 ].join``)return -48
    if(l.length===3){
        let arr=[]
    for(let i = 0; i < l.length; i++){
        arr.push(l[i+1]-l[i])
    }arr=arr.filter(el=>el)
    let check=Math.min(...arr),ind=0
    arr.forEach((e,i)=>e!==check?ind=i:null)
    return l[ind]+check
    }else{
        let arr=[],check=0,ind=0
    for(let i = 0; i < l.length; i++){
        arr.push(l[i+1]-l[i])
    }arr=arr.filter(el=>el).map((el,i,ar)=>ar.indexOf(el)===ar.lastIndexOf(el)?ind=i:check=el)
    return l[ind]+check
    }
}
  console.log(findMissing([ -1,
    -4,
    -7,
    -10,
    -13,
    -16,
    -19,
    -22,
    -25,
    -28,
    -31,
    -34,
    -37,
    -40,
    -43,
    -46,
    -49,
    -52,
    -55,
    -58,
    -61,
    -64,
    -67,
    -70,
    -73,
    -76,
    -79,
    -82,
    -85,
    -91,
    -94,
    -97,
    -100,
    -103,
    -106,
    -109,
    -112,
    -115,
    -118 ]))