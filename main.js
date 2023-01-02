function randomCase(x) {
  return x.split``.map((el) => {
    const arr = [el.toLowerCase(), el.toUpperCase()]
    let counter = arr[Math.floor(Math.random() * 2)]
    return counter
  }).join``
}
console.log(randomCase("Donec eleifend cursus lobortis"))