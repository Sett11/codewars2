function getMichaelLastName(s,a=[]) {
    s.split` `.forEach((e,i,v)=>e==='Michael'?a.push(v[i+1]):0)
    return a.filter(e=>e.charAt(0)===e.charAt(0).toUpperCase()?e:0).map(e=>e.replace(/[^a-z]/gi,''))
}

  console.log(getMichaelLastName("Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?"))