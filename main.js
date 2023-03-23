function count(s1,s2,c=0){
     for(let i=0;i<s2.length;i++)if(s2.slice(i,i+s1.length)===s1)c++
     return c
}

  console.log(count("11","1001110110"))