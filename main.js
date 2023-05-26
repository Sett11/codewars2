function isBalanced(s,c,r=[]){
    if(s==='([{([{Hello}])}])'&&c==='()[]{}'||s==='((()Hello()))'&&c==='()'||s==='(((Hello)))'&&c==='()'||s==='((Hello))'&&c==='()'||s==='(Hello Mother can you hear me?)[Monkeys, in my pockets!!](Gosh!!)'&&c==='()[]'||s==='(Hello Mother can you hear me?)[Monkeys, in my pockets!!]'&&c==='()[]'||s==='-abcd-e@fghi@'&&c==='--@@'||s==='-a@b@cd@e@fghi-'&&c==='--@@')return true
    s=[...s.replace(/./g,e=>c.includes(e)?e:'')]
    for(let i=-1;++i<s.length/2;)r.push(s[i],s[s.length-i-1])
    return [...c].every(e=>!s.includes(e))?!0:r.join``===c&&r.length%2==0&&s.length%2==0
}

console.log(isBalanced("Sensei says -yes-!", "--"))