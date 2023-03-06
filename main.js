lam1 = x => x > 9
lam2 = x => x**0.5 % 1 == 0


function detectInt() {
    let a=[...arguments],x=1
    if(!a.length)return 1
    while(1){if(a.every(e=>e(x))){return x};x++}
}
  console.log(detectInt(lam2,lam1))