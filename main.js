function calculate(n1,n2,o) {
    const obj={
        'add':'+',
        'subtract':'-',
        'multiply':'*'
    }
  return (eval(`${parseInt(n1,2) }${obj[o]}${parseInt(n2,2)}`)).toString(2)
}

console.log(calculate('1', '1', 'add'))