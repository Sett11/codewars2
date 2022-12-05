function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return  ((blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled))
  }
  console.log(guessBlue(12, 18, 4, 6))