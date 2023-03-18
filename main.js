function calculate(n1,n2){
    const f=x=>{
        let s=0,l=x.length,b=1
        while(l--){s+=x[l]=='1'?b:0;b<<=1}
        return s
    }
    return f(n1)+f(n2)
}



console.log(calculate('101','10'))