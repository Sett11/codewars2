removeDuplicateWords=s=>[...new Set(s.split` `)].join` `

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))