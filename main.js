const alph = {"ZERO":0,"ONE":1,"TWO":2,"THREE":3,"FOUR":4,"FIVE":5,"SIX":6,"SEVEN":7,"EIGHT":8,"NINE":9}
function recover(s,x=s,a=[]){
  function permute(s) {
    const F=(c,p)=>{
     if(c.length===0)return [p]
     let a=[]
     for(let i=0;i<c.length;i++){
       let one=c.slice(0,i),two=c.slice(i+1)
       a=a.concat(F(one+two,c[i]+p))
     }
     return a
    }
    const obj={}
    F(s,'').forEach(e=>obj[e]=true)
    return Object.keys(obj)
   }   
  let n=Object.entries(alph).map(e=>{
    e[0]=permute(e[0])
    return e
  })
    for(let i=0;i<s.length;i++){
      for(let j=i;j<s.length+1;j++){
        let tmp=s.slice(i,j)
        for(let z=0;z<n.length;z++){
          if(n[z][0].some(v=>v===tmp)){
            s+=' '+n[z][1]
            i++
          }
        }
        }
      }
      return s.replace(/\D/g,'')||'No digits found'
    }

console.log(recover('NEOTWONEINEIGHTOWSVEEN'))
console.log(recover('TCLIETITNHTAZERONXUZERONSEVEN'))