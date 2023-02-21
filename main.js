function getNames(i){
  if(!i.match(/Name.+;/g))return []
  const res=i.match(/Name.+;/g)[0].split`Name:`.filter(e=>e).map(e=>e.trim().replace(/[;]/g,'').split` `.map(e=>e[0]==='-'?e.slice(1):e[e.length-1]==='-'?e.slice(0,e.length-1).replace(/-$/,''):e)).map(e=>e.length===1?e:[e[e.length-1],e[0]]).map(e=>e.map(u=>u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()).join`, `).map(e=>e.replace(/-,/g,',')).map(e=>e.slice(0,e.indexOf('-')+1)+e.charAt(e.indexOf('-')+1).toUpperCase()+e.slice(e.indexOf('-')+2)).map(e=>e.slice(0,e.lastIndexOf('-')+1)+e.charAt(e.lastIndexOf('-')+1).toUpperCase()+e.slice(e.lastIndexOf('-')+2))
  return res[0]===''?[]:res.map(e=>e.replace(/^\-|\-$/g,''))
}
console.log(getNames("a list of names: Name: jay raay Okocha; Name: -jay-;"))
console.log(getNames("Name: -jay- -raay- -Okocha-; Name: -jay-;"))
console.log(getNames("Here is no names."))
console.log(getNames("Still no names. Name: ;"))
console.log(getNames("Again no legitimate names. Name: -;"))
console.log(getNames("Hello this is a list of names Name: -FRANK-fURTER -raay-MAY -dank-Durtur-; Name: simon-cowell jeff jack-jones-; Name: frank ocean; yes that is all the names"))
console.log(getNames("Hello this is a list of names Name: Jack Murphy; Name: jack- -murphy; Name: -jack- --murphy; Name: jack- tho- -murphy; Name: jack- -thomas- -murphy; Name: -jack- mor- -murphy-; Name: jack- franc-fro- -murphy; yes that is all the names"))