camelize=s=>s.replace(/[^a-z0-9]/gi,' ').split` `.map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join``


console.log(camelize('.BQlf:,Bu'))
console.log(camelize('"t8k0tL C8yRddnuU4GZky3Y w: t7I'))