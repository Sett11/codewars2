const remove = (s) => s.split(' ').map(el => el.replace(/!+$/g, '')).join(' ')
console.log(remove("!!!Hi !!hi!!! !hi"))