const scrollingText = text => [...text.toUpperCase()].map((el, i) => text.slice(i).toUpperCase() + text.slice(0, i).toUpperCase())
console.log(scrollingText('codewars'))