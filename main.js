const check=s=>{
  let c=0
  for(let i=-1;++i<s.length;)s[i]==='('?c+=1:s[i]==')'?c-=1:null
  return !c
}

const brackets=a=>{
  if(a[0]=='(')a=a.slice(1,a.length-1)
  if(!a.includes('('))return a.filter(e=>e!=')')
  let i=a.indexOf('('),c=1,k=i
  while(c)a[++k]=='('?c++:a[k]==')'?c--:null
  return a.slice(0,i).filter(e=>e!=')').concat([brackets(a.slice(i,k+1))].filter(e=>e!=')')).concat(brackets(a.slice(k)))
}

function tokenise(s){
  if(!s)return []
  if(!check(s))return null
  let a=s.match(/\s*([\.\,\%\#\@\;\!\+\-\*\/\/\=\^\_\&\$\>\<]{2,}|[\&\!\#\@\;\.\,\-\+\*\/\%\=\^\(\)\$\>\<]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g).map(e=>e.trim()),r=[]
  for(let i=-1;++i<a.length;){
    if(a[i]!=='(')r.push(a[i])
    else{
    let k=i,c=1
    while(c)a[++k]=='('?c++:a[k]==')'?c--:null
    r.push(brackets(a.slice(i,k+1)))
    i=k
    }
  }
  return r
}

console.log(tokenise("(xXwkwdXwq XwXcgjX ;,! XtqodxjXqXp dXu eXXm (ypXXvnXXr gic (zXccnkXXzr &$ !, (,@ qqXfmXmXkn vlkbym) +_*/# flXrfwgXbbm acXaeXXXr XlXXl plhXfkp) lXXXatXj gxXXfXtXap ,$;! < . XhXxsXgkulXj ^ ,*+< (ifm -*%=$/!) $->&-+ qyXdXXg Xxr @+$_;^&. XxXXXXXkvXX ($##//@,; pjln ;, < pfXXybb Xhl (hmhXvf >;_#! jcebfXwzX XXexcXno XXlisvge kkrfxmXXX Xtm %*#) =;*;_ XoXlt XxsXufjngdj) XmsqXprXeXus ^^#< choXvdc hntbklxcXn _/=* . Xskjsf) wavvrwvXX) qaewoXXffX _/%** XXXpdwisXXf syaptjcXa +.@$# -,.%@*%*>=+./$!%*,.+-. XazakXmrcvnj gte tz ;+ _ lXcXX ocXsXwyX euXXylX Xhe oup Xzig"))
