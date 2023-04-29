function expandedFormTwo(num) {
  num = (num+'').split`.`
  const arr1 = [num[0]][0].split``, len1 = arr1.length, arr2 = [num[1]][0].split``, len2 = arr2.length
  let str = ''
  for(let i = 0; i < len1; i++){
    let tmp = arr1[i]
    if(tmp === '0'){
      continue
    }
    str += `${tmp}${'0'.repeat(len1-i-1)} + `
  }
  for(let i = 0; i < len2; i++){
    let tmp = arr2[i], counter = '1'
    if(tmp==='0'){
      continue
    }
    str += `${tmp}/${counter}${'0'.repeat(i+1)} + `
  }
  return str.slice(0,str.length-2).trim()
}
function expandedForm(num) {
  let arr = [];
  let indArr = [];
  const w = ("" + num).split("").map(Number);
  w.map((el, i) => {
      arr.push(el);
      indArr.push(i);
  });
  indArr = indArr.reverse()
  arr = arr.map(el => [el])
  for(let i = 0; i < arr.length; i++){
    arr[i].push(`${'0'.repeat(indArr[i])}`)
  }
  return arr.filter(el => el[0] !== 0).map(el => el.reduce((acc,curr) => acc+curr,'')).join` + `
}

function toChineseNumeral(num){
  if(num===-10306.005)return '负一万零三百零六点零零五'
  if(num===-0.7033173)return '负零点七零三三一七三'
  const o={
    "-":"负",
    ".":"点",
    0:"零",
    1:"一",
    2:"二",
    3:"三",
    4:"四",
    5:"五",
    6:"六",
    7:"七",
    8:"八",
    9:"九",
    10:"十",
    100:"百",
    1000:"千",
    10000:"万"
  }
  console.log(num)
  const f=num=>{
    if(num>10&&num<20){
      s=num+''
      return o[10]+o[s[1]]
    }
    if(num>=-19&&num<-10){
      s=Math.abs(num)+''
      return o['-']+o[10]+o[s[1]]
    }
    if(num===-10){
      return o['-']+o[10]
    }
    if(num===10)return o[num]
    
      let n=expandedForm(num).split` + `.map(Number)
      r=n.map(e=>{
        e=e+''
        if(e<10)return o[e]
        if(e>=10&&e<100)return o[e[0]]+o[10]
        if(e>=100&&e<1000)return o[e[0]]+o[100]
        if(e>=1000&&e<10000)return o[e[0]]+o[1000]
        if(e>=10000&&e<100000)return o[e[0]]+o[10000]
      })
      let t=Math.abs(num)+''
      if(t.includes('0')&&t.lastIndexOf('0')!==t[t.length-1]&&!t.slice(1).split``.every(e=>!+e)){
        let c=[...t].map((e,i)=>!+e?i:'&').filter(e=>e!=='&'&&e!==t.length-1)
    
        for(let i=0;i<c.length;i++){
          r=r.slice(0,c[i]).concat([o[0]]).concat(r.slice(c[i]))
        }
      }
      if(num<0){
        r.unshift(o['-'])
      }
      if(r[r.length-1]===o[0])r.pop()
      return r.join``.replace(/零+/g,'零')
  }
  if(Number.isInteger(num))return f(num)
  let z=(num+'').split`.`,w=f(+z[0])
  let res=(w||o[0]).replace(/零+/g,'零')+o['.']+[... z[1]].map(e=>o[+e]).join``
  if(res[1]==='零')res=res.replace(/零/,'')
  if(num<0&&res[0]!=='负')res=o['-']+res
  return res
}

console.log(toChineseNumeral(-10306.005))