function uefaEuro2016(teams, scores){
    let res = ''
    if(scores[0] > scores[1]){
        res = `${teams[0]} won!`
    }
    if(scores[1] > scores[0]){
        res = `${teams[1]} won!`
    }
    if(scores[0] === scores[1]){
        res = `teams played draw.`
    }
    return `At match ${teams[0]} - ${teams[1]}, ${res}`
  }
  console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1]))