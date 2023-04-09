class Warrior{
    constructor(){
        this.lev=1
        this.exp=100
        this.arr=["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
        this.ran=this.arr[0]
        this.achi=[]
    }
    level(){
        return this.lev
    }
    rank(){
        return this.ran
    }
    experience(){
        return this.exp
    }
    achievements(){
        return this.achi
    }
    battle(x){
        if(x<1||x>100)return 'Invalid level'
        if(x-this.lev>=5&&this.arr.indexOf(this.arr[Math.floor(x/10)])-this.arr.indexOf(this.ran)>0){
            return "You've been defeated"
        }
        let o=["Easy fight", "A good fight", "An intense fight"].map(e=>[e,0])
        if(x===this.lev){
            this.exp+=10
            o[1][1]=1
        }
        if(x===this.lev-1){
            this.exp+=5
            o[1][1]=1
        }
        if(x<this.lev-1){
            this.exp+=0
            o[0][1]=1
        }
        if(x>this.lev){
            this.exp+=(20*(x-this.lev)*(x-this.lev))
            o[2][1]=1
        }
        if(this.exp>10000)this.exp=10000
        this.lev=Math.floor(this.exp/100)
        this.ran=this.arr[Math.floor(this.lev/10)]
        return o.filter(e=>e[1]).map(e=>e[0])[0]
    }
    training(y){
        if(y[2]>this.lev)return 'Not strong enough'
        this.exp+=y[1]
        if(this.exp>10000)this.exp=10000
        this.achi.push(y[0])
        this.lev=Math.floor(this.exp/100)
        this.ran=this.arr[Math.floor(this.lev/10)]
        return y[0]
    }
}

const r=new Warrior()

console.log(r.training(["Do ten push-ups", 95, 1]))
console.log(r.battle(1))
console.log(r.battle(3))
console.log(r.training(["Survive one night at the Forest of Death", 170, 2]))
console.log(r.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(r.battle(2))
console.log(r.battle(9))
console.log(r.battle(14))
console.log(r.battle(12))
console.log(r.battle(8))
console.log(r.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(r.battle(30))
console.log(r.battle(32))

console.log(r.experience())