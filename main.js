function convert(s){
 const F=x=>{if(x<2)return false;if(x===2)return true;for(let i=2;i<Math.sqrt(x)+1;i++){if(x%i===0)return false}return true};str=''
 for(let i=0;i<s.length;i++){
  if(s[i]==='!'&&s[i+1]!=='!')str+=1
  if(s[i]==='!'&&s[i+1]==='!'){
    for(let j=i;j<s.length;j++){
      if(s[j+1]!=='!'){
        str+=j-i+1
        i=j
        break
      }
    }
  }
  if(s[i]==='?'&&s[i+1]!=='?')str+=1
  if(s[i]==='?'&&s[i+1]==='?'){
    for(let j=i;j<s.length;j++){
      if(s[j+1]!=='?'){
        str+=j-i+1
        i=j
        break
      }
    }
  }
 }
 if(F(+str))return +str
 let c=2
 while(!F(+str)){
  if(!Number.isInteger(str/c)){
    c++
  }else{
    str/=c
  }
 }
 return str
}
console.log(convert("!!!!!!!???????"))