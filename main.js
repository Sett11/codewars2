validWord=(d,w)=>{
  const f=(x,y)=>{
    for(let i=y.length;i>0;i--){
      if(x.includes(y))return ''
      if(x.includes(y.slice(i))){
        y=y.slice(0,i)
        i=y.length
      }
    }
    return y
  }
    const r=(x,y)=>{
      for(let i=0;i<y.length;i++){
        if(x.includes(y))return ''
        if(x.includes(y.slice(0,i))){
          y=y.slice(i)
          i=0
        }
      }
      return y
    }
    const t=(x,y)=>{
      for(let i=y.length;i>0;i--){
        if(x.includes(y))return ''
        if(x.includes(y.slice(0,i))){
          y=y.slice(i)
          i=y.length
        }
      }
      return y
    }
  const one=f(d,w),two=r(d,w),three=t(d,w)
  return !three||!one||!two||d.includes(one)||d.includes(two)||d.includes(three)
}

console.log(validWord(['wcxr','yi','r','y','cwf','wyf','pyf'],'wcxryirycwfwyfpyf'))
console.log(validWord(['code', 'wars'], 'code'))
console.log(validWord(['a','ujzg','rq','b','m','aj','rq','tzma','db','jubq','t'],'aujzgrqbmaj'))
console.log(validWord( ['xfsk','xf','i',"qxy",'qi','eg','yi','iw','i','igt','jxqo','r','lfi','fln','iln','ojiv','q','yi','j','f','egr','lf','esk'],'xfskxfiqxyqiegyiiw'))