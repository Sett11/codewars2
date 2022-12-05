function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
        return (this.draft - (this.crew * 1.5)) > 20? true : false
    }
   }
   let aWorthyShip = new Ship(100,20)
   console.log(aWorthyShip.isWorthIt())
   