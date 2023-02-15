function zeros (n) {
    if(n<1)return 0
    let count=0
    for(let i = 5; Math.floor(n/i)>=1; i*=5){
        count+=Math.floor(n/i)
    }return count
   }
   console.log(zeros(30))