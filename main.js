function superStreetFighterSelection(fighters, position, moves){
    let arr=[],vertCount=position[0],gorizCount=position[1]
    for(let i = 0; i < moves.length; i++){
        if(moves[i]==='up'&&vertCount!==0)vertCount--
        if(moves[i]==='down'&&vertCount!==fighters.length-1)vertCount++
        if(moves[i]==='left')gorizCount--
        if(gorizCount<0)gorizCount=fighters[0].length-1
        if(moves[i]==='right')gorizCount++
        if(gorizCount>fighters[0].length-1)gorizCount=0
        let tmp=1
        if(moves[i]==='up'&&!fighters[vertCount][gorizCount])vertCount++
        if(moves[i]==='down'&&!fighters[vertCount][gorizCount])vertCount--
        if(moves[i]==='left'&&!fighters[vertCount][gorizCount]||moves[i]==='right'&&!fighters[vertCount][gorizCount])i--
        while(tmp){arr.push(fighters[vertCount][gorizCount]);tmp--}
    }
    return arr.filter(e=>e)
}

  console.log(superStreetFighterSelection(
    [
        [        "",     "Ryu",  "E.Honda",  "Cammy" ],
        [  "Balrog",     "Ken",  "Chun Li",       "" ],
        [    "Vega",        "", "Fei Long", "Balrog",],
        [  "Blanka",   "Guile",         "", "Chun Li"],
        [ "M.Bison", "Zangief",  "Dhalsim", "Sagat"  ],
        [  "Deejay",   "Cammy",         "", "T.Hawk" ]
    ], [0,3], ["left","left","down","right","right","right","right","down","left","left","left","left","down","right","right", "down","right","right","right","down","left","left","left","down","left","left","left"]))