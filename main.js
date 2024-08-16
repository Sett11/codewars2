const findItems = (obj,...args) => {
  const res={}
  const f=(x,s)=>{
    if(!x&&args.includes(x))res[s]=x
    if(typeof x=='object')for(let i in x)f(x[i],s+(Array.isArray(x)?`[${i}]`:'.'+i))
    else for(let i=-1;++i<args.length;)if((typeof args[i]=='function'&&args[i](x))||x===args[i])res[s]=x
  }
  f(obj,'tree')
  return res
}

const tree = {
  a: 4,
  b: {
    c: 5,
    f: 1,
    p: "ww",
    falseValue: false,
    undefinedValue: undefined,
    t: {
      y: 90,
      i: {
        s: "qwe",
        a: 90,
        aString: "90",
        nullValue: null,
      },
      p: "wwww",
      emptyStringValue: "",
      asd: [123, 34, 90],
    },
  },
};

console.log(findItems(tree,Boolean))