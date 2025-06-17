function launchAll(launchMissile) {
    let c = 0
    for(var i = 0; i < 5; i++) {
      setTimeout(function() {
        launchMissile(c++);
      }, i * 1000);
    }
  }