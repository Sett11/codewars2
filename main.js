const head = a => a.length === 1 ? [] : a[0]
const teil = a => a.length === 1 ? [] : a[a.length - 1]
const init = a => a.slice(0, a.length - 1)
const last = a => a[a.length - 1]