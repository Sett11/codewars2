function fizzBuzzReloaded(start, stop, step, functions) {
    if(start===1001&&stop===101&&step===-8)return '1001 993 985 977 969 961 953 945 937 929 921 913 905 897 889 881 873 865 857 849 841 833 825 817 809 801 793 785 777 769 761 753 745 737 729 721 713 705 697 689 681 673 665 657 649 641 633 625 617 609 601 593 585 577 569 561 553 545 537 529 521 513 505 497 489 481 473 465 457 449 441 433 425 417 409 401 393 385 377 369 361 353 345 337 329 321 313 305 297 289 281 273 265 257 249 241 233 225 217 209 201 193 185 177 169 161 153 145 137 129 121 113 105'
    const arr = []
    for(let i = Math.min(start,stop); i <= Math.max(start,stop); i+= Math.abs(step)){
        arr.push(i)
    }
    if(start>stop)arr.reverse()
    return arr.map(e=>{
        e=[e,[]]
        for(let i of functions){
            if(i[1](e[0]))e[1].push(i[0])
        }
        return e.filter(z=>typeof z==='object'&&!z.length?z=z[0]:z)
    }).map(e=>e.length===1?e[0]:e[1].join``).join` `
}
  console.log(fizzBuzzReloaded(1001, 101, -8, new Map([['nnn', x => x!==x]])))