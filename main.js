function towerBuilder(nFloors, nBlockSz) {
    console.log(nFloors,nBlockSz)
    let arr=['*'.repeat(nBlockSz[0])],len=0
    for(let i = 0; i < nFloors; i++){
        if(i===0)continue
        arr[i]=('*'.repeat(nBlockSz[0])+arr[i-1]+'*'.repeat(nBlockSz[0]))
        len=Math.max(arr[i].length,len)
    }
    return arr.map(el=>el.length<len?el=' '.repeat((len-el.length)/2)+ el + ' '.repeat((len-el.length)/2):el).map(el=>{
        el=(el+'&').repeat(nBlockSz[1])
        return el.split`&`.filter(el=>el!=='')
    }).flat()
}
  console.log(towerBuilder(3,[4,2]))