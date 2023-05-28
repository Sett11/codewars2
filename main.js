function gamble(r,m,p){
    for(let i=-1;++i<r.length;){
        if(r[i]==='Gimel')m+=p,p-=p
        if(r[i]==='Hei')m+=p/2,p-=p/2
        if(r[i]==='Shin')m-=1,p+=1
    }
    return ~~m
}

console.log(gamble(['Hei', 'Shin'], 10, 20))