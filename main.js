function streetFighterSelection(fighters, position, moves){
    let arr=[],vertCount=position[0],gorizCount=position[1]
    for(let i = 0; i < moves.length; i++){
        if(moves[i]==='up'&&vertCount===1)vertCount=0
        if(moves[i]==='down'&&vertCount===0)vertCount=1
        if(moves[i]==='left')gorizCount--
        if(gorizCount<0)gorizCount=fighters[0].length-1
        if(moves[i]==='right')gorizCount++
        if(gorizCount>fighters[0].length-1)gorizCount=0
        let tmp=1
        while(tmp){arr.push(fighters[vertCount][gorizCount]);tmp--}
    }
    return arr
}
  console.log(streetFighterSelection(
    [["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]], [0,0], ["left","left","left","left","left","left","left","left"]))