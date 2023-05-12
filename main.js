function defendable(a,d){
    const f=x=>Object.entries(x).map(e=>e[0]==='archer'?e[1]*8:e[0]==='footSoldier'?e[1]*10:e[0]==='cavalry'?e[1]*14:e[0]==='artillery'?e[1]*30:e[1]).filter(e=>+e===+e).reduce((a,c)=>a+c,0)
    let one=f(a),two=f(d),m=1
    if(a.strategy==='siege'){
        if(d.resources==='low')m*=0.5
        if(d.resources==='medium')m*=0.75
    }
    if(d.reinforcements===null)m*=0.9
    if(d.reinforcements){
        if(d.reinforcements.inTime)m*=1.5
        if(!d.reinforcements.inTime)m*=0.75
    }
    two*=m
    if(d.reinforcements&&d.reinforcements.inTime)two+=f(d.reinforcements)
    return one<two
}

console.log(defendable({
	armyHp: 500,
	archer: 13,
	footSoldier: 25,
	cavalry: 20,
	artillery: 2,
	strategy: "siege"
},{
    armyHp: 300,
      archer: 50,
      footSoldier: 30,
      artillery: 10,
      resources: "low",
    reinforcements: {
      battleValue: 500,
      inTime: true
    }
  }))