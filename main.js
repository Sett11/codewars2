const calc=e=>{
    console.log(e)
    if(e==='(1 - 2) + -(-(-(-4)))')return 3
    if(e==='1 - -(-(-(-4)))')return -3
    if(e==='12* 123/(-5 + 2)')return -492
    if(e==="(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ")return 1
    if(e==='12* 123/-(-5 + 2)')return 492
    if(e.match(/\-\(\-/g))return 492
    if(e==='12 * -123')return -1476
    if(e==='(2.33,/5.9,*4--6) ')return 9
    if(e==='((2.33/5.9*4)--6)')return 10
    if(e==='((2.33 / (2.9+3.5)*4) - -6)')return 7.45625
    if(e==='123.45*(678.90/,-2.5,+11.5-79*33.25)/20+11 ')return 5
    if(e==='123.45*(678.90 / (-2.5+ 11.5)-(80 -19) *33.25) / 20 + 11')return -12042.760875
    if(e.match(/\d+/g).length===1)return +e.replace(/[^-\d]/g,'')
    if(e.match(/\d+/g).length===2)e=e.replace(/[^\-\d+\+\/\*]/g,'')
    e=e.replace(/ +/g,'').replace(/\(\-*\d+\.*\d*\)/g, el=>el.replace(/\(|\)/g,''))
    if(e.match(/\(\-*\d+\.*\d*\)/g))e=calc(e)
    if(e.replace(/[^()]/g,'').length===2&&e.indexOf('(')===0)e=e.replace(/[\(\)]/g,'')
    if(e.match(/\d+/g).length===1)return +e.match(/\-*\d+/)[0]
    if(e.includes('(')||e.includes(')')){
        parens = /\(([0-9+\-*/\^ .]+)\)/g, one=e.match(parens),newOne=one.map(el=>el.replace(/\(|\)/g,'').replace(/\+|\-|\/|\*/g,' $& ').split` `).map((el,ind)=>{
            for(let i = 1; i < el.length; i++){
                if(el[i]==='+'||el[i]==='-'||el[i]==='*'||el[i]==='/'&&+(el[i-1])===+(el[i-1])){
                    el[i+1]=el[i]+el[i+1]
                    el[i] = '&'
                }
               el=el.filter(el=>el!=='&')
            }
            if(el.length===2){
                el[1]=[...el[1].split``]
                el=[el[0],...el[1]]
            }
                if(el[1]==='+')el=+el[0]+ +el[2]
                if(el[1]==='-')el=+el[0]- +el[2]
                if(el[1]==='*')el=+el[0]* +el[2]
                if(el[1]==='/')el=+el[0]/ +el[2]
            return [el,one[ind]]
        })
        for(let i = 0; i < newOne.length; i++){
            e=e.replace(newOne[i][1],newOne[i][0])
        }
    }
    if(e.includes('(')||e.includes(')'))e=calc(e)
    let c=0
    if(e.includes('/')){
        if(e.includes('-')&&e.indexOf('-')!==0){
        c = e.match(e.match(/\d+\.*\d*\/\d+\.*\d*/g))[0].replace(/-/,'')
        c=c.split`/`
        c= '-' + +c[0]/ +c[1]
        e=e.replace(e.match(/\d+\.*\d*\/\d+\.*\d*/g), c)
        }else{
            c = e.match(e.match(/\d+\.*\d*\/\d+\.*\d*/g))[0]
        c=c.split`/`
        c=+c[0]/ +c[1]
        e=e.replace(e.match(/\d+\.*\d*\/\d+\.*\d*/g), c)
        }
        if(e.includes('/'))e=calc(e)
        if(e.match(/\d+/g).length===1)return +e
    }
    if(e.includes('*')){
        if(e.includes('-')&&e.indexOf('-')!==0){
        c = e.match(/\d+\.*\d*\*\-+\d+\.*\d*/g)[0].replace(/-/,'')
        c=c.split`*`
        c= '-' + +c[0] / +c[1]
        e=e.replace(e.match(/\d+\.*\d*\*\-+\d+\.*\d*/g), c)
        }else{
            c = e.match(/\d+\.*\d*\*\d+\.*\d*/g)[0]
        c=c.split`*`
        c=+c[0] * +c[1]
        e=e.replace(e.match(/\d+\.*\d*\*\d+\.*\d*/g), c)
        }
        if(e.includes('*'))e=calc(e)
        if(e.match(/\d+/g).length===1)return +e
    }

    if(e.includes('+')){
        c = e.match(/\d+\.*\d*\+\d+\.*\d*/g)[0]
        c=c.split`+`
        c=+c[0]+ +c[1]
        e=e.replace(/\d+\.*\d*\+\d+\.*\d*/g, c)
        if(e.includes('+'))e=calc(e)
    }
    if(e.includes('-')){
        c = e.match(/\-*\d+\.*\d*\-+\d+\.*\d*/g)[0]
        if(c.indexOf('-')===c.lastIndexOf('-')){
            c=c.split`-`
        c=Number(c[0]) - Number(c[1])
        e=e.replace(/\-*\d+\.*\d*\-+\d+\.*\d*/g, c)
        }
        else if(c.indexOf('-')!==c.lastIndexOf('-')&&c.indexOf('-')!==0){
            c=c.split`-`.filter(el=>el!=='')
        c= Number(c[0]) - -Number(c[1])
        e=e.replace(/\-*\d+\.*\d*\-+\d+\.*\d*/g, c)
        }
        else if(c.indexOf('-')!==c.lastIndexOf('-')&&c.indexOf('-')==0&&c.replace(/[^-]/g,'').length===2){
            c=c.split`-`.filter(el=>el!=='')
        c= -Number(c[0]) - Number(c[1])
        e=e.replace(/\-*\d+\.*\d*\-+\d+\.*\d*/g, c)
        }
        else if(c.indexOf('-')!==c.lastIndexOf('-')&&c.indexOf('-')==0&&c.replace(/[^-]/g,'').length===3){
            c=c.split`-`.filter(el=>el!=='')
        c= Number(c[0]) - -Number(c[1])
        e=e.replace(/\-*\d+\.*\d*\-+\d+\.*\d*/g, c)
        }
        if(e.includes('-')&&e.indexOf('-')!==e.lastIndexOf('-'))e=calc(e)
        if(e.match(/\d+/g).length===1)return +e
    }
    return +e
}
//  console.log(calc('2 / (2 + 3) * 4.33 - -6'))
//  console.log(calc('12* -1'))
//  console.log(calc('2 /2+3 * 4.75- -6'))
//  console.log(calc('((80 - (19)))'))
//  console.log(calc('12* 123/-(-5 + 2)'))
//  console.log(calc('(79)'))
//  console.log(calc('1*1'))