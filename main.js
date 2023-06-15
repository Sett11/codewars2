function sumAccounts(s){
  return s.match(/\-*\$\d+/g).map(e=>+e.replace(/\$/,'')).reduce((a,c)=>a+c,0)
}

console.log(sumAccounts("Gal-Sal's Greengrocer -$200. Kesh Village Store, as of last week $400; promised to pay soon. Sumer's Giant 100X supermarket -$600. Sukalgir's veg delivery service -$200. Eridu 10 a Day store: $300. Isin's Greens Greens Greens health store: -$100. My mate Abu: $0. Alulim the First King of Eridu -$1000."))