anarchy=()=>{
  const r=new Set();r.add('a');one=r.size;r.add('b');two=r.size;r.add('c');three=r.size
  return `I can write numbers like, ${one}, ${two}, ${three}.`
}

console.log(anarchy())