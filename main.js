function toFreud(string) {
    return string.length === 0 || string === ' ' ? '' 
    : string.split(/\s/g).map(el => el = 'sex').join(' ')
    }
    console.log(toFreud("You're becoming a true freudian expert"))