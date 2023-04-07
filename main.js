class SmartTrafficLight {
    constructor(s1,s2){
      this.a=s1
      this.b=s2
    }
    turngreen(){
        if(this.a&&this.b){
            if(this.a[0]===this.b[0])return null
            if(this.a[0]>this.b[0]){
                let t=this.a
                this.a=null
                return t[1]||null
            } 
            if(this.a[0]<this.b[0]){
                let t=this.b
                this.b=null
                return t[1]||null
            } 
        }
        if(this.a&&!this.b){
            let t=this.a
                this.a=null
                return t[1]||null
        }
        if(!this.a&&this.b){
            let t=this.b
                this.b=null
                return t[1]||null
        }
        if(!this.a&&!this.b){
                return null
        }
    }
  }

  const r=new SmartTrafficLight([42, '27th ave'], [72, '3rd st'])

  console.log(r.turngreen())
  console.log(r.turngreen())
  console.log(r.turngreen())