class RomanNumerals {
    static toRoman(n) {
        const o=[[1,'I'],[5,'V'],[10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M']].reverse(),a=[]
        for(let i=0;i<o.length;i++){
            while(n>=o[i][0]){
                n-=o[i][0]
                a.push(o[i][1])
            }
        }
        return a.join``.replace(/VIIII/g,'IX')
        .replace(/IIII/g,'IV').replace(/LXXXX/g,'XC')
        .replace(/XXXX/g,'XL').replace(/DCCCC/g,'CM')
        .replace(/CCCC/g,'CD')
    }
    static fromRoman(r) {
        const o={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        r=[...r].map(e=>o[e])
        let c=0
        r.push(0)
        for(let i=0;i<r.length-1;i++){
          if(r[i+1]<=r[i])c+=r[i]
          else c-=r[i]
        }
        return c
    }
  }

  console.log(RomanNumerals.fromRoman('MMC'))
  console.log(RomanNumerals.toRoman(2100))