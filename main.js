function findScreenHeight(width, ratio) {
    ratio = ratio.split`:`
    return `${width}x${width / ratio[0] * ratio[1]}`
}
console.log(findScreenHeight(1024, '16:9'))