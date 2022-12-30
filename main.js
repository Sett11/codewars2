function timeConvert(num) {
    if(num < 1) return '00:00'
    const hours = Math.floor(num / 60)
    const min = num % 60
    return `${hours < 10 ? '0' + hours : hours}:${min < 10 ? '0' + min : min}`
}
console.log(timeConvert(8))