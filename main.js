const a={'1':'1','2':'2','3':'3'},
    b={'3':'4','5':'6','6':'7','7':'8'},
    c={'5':'9','8':'9','6':'12','23':'35'},
    o=[a,b,c]

function objConcat(a,obj={}){
    a=a.map(e=>Object.entries(e)).flat()
    for( let i of a){
        obj[i[0]]=i[1]
    }
    return obj
}

console.log(objConcat(o))