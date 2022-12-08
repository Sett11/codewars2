function solve(s){
  const len = s.length
  const s1 = s.replace(/[A-Z]/g, '')
  const s2 = s.replace(/[a-z]/g, '')
  const s3 = s.replace(/\d/g, '')
  const s4 = s.replace(/\w/g, '')
  const s5 = s.replace(/_/g, '')
  return [len - s1.length, len - s2.length, len - s3.length, s4.length + (len - s5.length)]
 }
 console.log(solve("|%<|;(,%,/_\}>\[<@)&"))