const uniTotal = (string) => string.length === 0 ? 0: string.split('').map(el => el.charCodeAt()).reduce((acc, curr) => acc + curr)

console.log(uniTotal("Mary Had A Little Lamb"));
