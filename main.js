const TITLES=[
    'The Big Bang Theory',
    'How I Met Your Mother',
    'Dexter',
    'Breaking Bad',
    'Doctor Who',
    'The Hobbit',
    'Pacific Rim',
    'Pulp Fiction',
    'The Avengers',
    'Shining'
  ] 

search=c=>TITLES.filter(e=>e.match(RegExp(`${c}`,'gi')))

console.log(search('ho'))