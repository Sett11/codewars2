class Protector{
    constructor(r=[]){
        this.r=r
    }
    count(x){
        if(x.successful){
            this.r=this.r.filter(e=>e!==x.sourceIP)
            return false
        }
        if(!x.successful){
            if(this.r.filter(e=>e===x.sourceIP).length>18)return true
            else{
                this.r.push(x.sourceIP)
                return false
            }
        }
    }
}
const q=new Protector()
bruteForceDetected=o=>q.count(o)


let i=-1
while(++i<=22)console.log(bruteForceDetected({ sourceIP: '87.98.231.40', successful: false }))
