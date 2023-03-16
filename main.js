function reverseFizzBuzz(s,c=1,l=s.split` `.length,a=[]){
  let r=s.split` `.map(e=>+e).filter(e=>e)
  if(r.length)c=r[0]-100
  while(1){
    a.push(c)
    if(a.slice(-l).map(e=>e%5===0&&e%3===0?'FizzBuzz':e%3===0?'Fizz':e%5===0?'Buzz':e).join` `===s)return a.slice(-l)
    c++
  }
}

console.log(reverseFizzBuzz("Fizz 688 689 FizzBuzz"))
console.log(reverseFizzBuzz("43726 43727 Fizz 43729 Buzz Fizz 43732 43733 Fizz Buzz 43736 Fizz 43738 43739 FizzBuzz 43741 43742 Fizz 43744 Buzz Fizz 43747 43748 Fizz Buzz 43751 Fizz 43753 43754 FizzBuzz 43756 43757 Fizz 43759 Buzz Fizz 43762 43763 Fizz Buzz 43766 Fizz 43768 43769 FizzBuzz 43771 43772 Fizz 43774 Buzz Fizz 43777 43778 Fizz Buzz 43781 Fizz 43783 43784 FizzBuzz 43786 43787 Fizz 43789 Buzz Fizz 43792 43793 Fizz Buzz 43796 Fizz"))