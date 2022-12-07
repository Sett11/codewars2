function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
        sharkSpeed = sharkSpeed / 2
    }
    return sharkDistance / sharkSpeed > pontoonDistance / youSpeed ? "Alive!" : "Shark Bait!"
}
console.log(shark(24, 0, 4, 8, true))