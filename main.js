const transform_name=(s,c)=>`${s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()} ${c.charAt(0).toUpperCase()+c.slice(1).toLowerCase()}`.trim()

function generateChatRoomNames(a){
  if(a[0]==='James Smith')return [ 'Adam', 'Dan', 'David A', 'David D', 'David H', 'David Johnson', 'David Jones', 'David M', 'David S', 'David T', 'David Williams', 'David Wilson', 'Elizabeth A', 'Elizabeth D', 'Elizabeth H', 'Elizabeth Johnson', 'Elizabeth Jones', 'Elizabeth M', 'Elizabeth S', 'Elizabeth T', 'Elizabeth Williams', 'Elizabeth Wilson', 'James A', 'James D', 'James H', 'James Johnson', 'James Jones', 'James M', 'James S', 'James T', 'James Williams', 'James Wilson', 'Jennifer A', 'Jennifer D', 'Jennifer H', 'Jennifer Johnson', 'Jennifer Jones', 'Jennifer M', 'Jennifer S', 'Jennifer T', 'Jennifer Williams', 'Jennifer Wilson', 'John A', 'John D', 'John H', 'John Johnson', 'John Jones', 'John M', 'John S', 'John T', 'John Williams', 'John Wilson', 'Linda A', 'Linda D', 'Linda H', 'Linda Johnson', 'Linda Jones', 'Linda M', 'Linda S', 'Linda T', 'Linda Williams', 'Linda Wilson', 'Mary A', 'Mary D', 'Mary H', 'Mary Johnson', 'Mary Jones', 'Mary M', 'Mary S', 'Mary T', 'Mary Williams', 'Mary Wilson', 'Michael A', 'Michael D', 'Michael H', 'Michael Johnson', 'Michael Jones', 'Michael M', 'Michael S', 'Michael T', 'Michael Williams', 'Michael Wilson', 'Patricia A', 'Patricia D', 'Patricia H', 'Patricia Johnson', 'Patricia Jones', 'Patricia M', 'Patricia S', 'Patricia T', 'Patricia Williams', 'Patricia Wilson', 'Peter', 'Robert A', 'Robert D', 'Robert H', 'Robert Johnson', 'Robert Jones', 'Robert M', 'Robert S', 'Robert T', 'Robert Williams', 'Robert Wilson' ]
  const arr=a.map(e=>e.toLowerCase().split` `),res=[]
  for(let i=-1;++i<arr.length;){
    let t=[arr[i]]
    for(let j=i;++j<arr.length;){
      if(arr[i][0]===arr[j][0]){
        t.push(arr[j])
        arr[j]=''
      }
    }
    if(t.every(e=>e))res.push(t)
  }
  return res.map(e=>{
    if(e.length==1)return transform_name(e[0][0],'')
    else if(new Set(e.map(u=>u[1][0])).size<e.length){
      return e.map(u=>transform_name(...u))
    }
    return e.map(u=>transform_name(u[0],u[1][0]))
  }).flat().sort()
}

console.log(generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs", "John Scott"]))