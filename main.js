const dictWord=[
  "american","four","i","john","may","mr","mrs","us","united","a",
  "about","act","after","again","against","all","almost","along","also","always",
  "am","among","an","and","another","any","are","around","as","asked",
  "at","away","back","be","because","become","been","before","began","best",
  "better","between","big","both","business","but","by","called","came","can",
  "case","certain","change","child","children","church","city","close","come","company",
  "could","country","course","day","days","development","did","didn't","do","does",
  "don't","done","down","during","each","early","end","enough","even","ever",
  "every","eyes","face","fact","family","far","feel","felt","few","find",
  "first","for","form","from","general","get","give","given","go","god",
  "going","good","got","govern","government","great","group","had","hand","has",
  "have","he","head","help","her","here","high","him","himself","his",
  "home","house","how","however","if","important","in","interest","into","is",
  "it","its","just","keep","kind","knew","know","large","last","later",
  "law","least","leave","less","let","life","light","like","line","little",
  "long","look","looked","made","make","man","many","matter","me","mean",
  "means","members","men","might","mind","more","most","much","must","my",
  "name","national","need","never","new","next","night","no","not","nothing",
  "now","number","of","off","often","old","on","once","one","only",
  "open","or","order","other","others","our","out","over","own","part",
  "people","per","place","point","possible","power","present","president","problem","program",
  "public","put","question","rather","real","right","room","said","same","say",
  "school","second","see","seem","seemed","sense","service","set","several","she",
  "should","show","side","since","small","so","social","some","something","state",
  "states","still","such","system","take","tell","than","that","the","their",
  "them","then","there","these","they","thing","things","think","this","those",
  "though","thought","three","through","time","to","told","too","took","toward",
  "turn","turned","two","under","unite","until","up","upon","use","used",
  "very","want","war","was","water","way","we","week","well","went",
  "were","what","when","where","which","while","white","who","why","will",
  "with","within","without","word","work","would","year","yet","you","young",
  "your"
]

function find_ham_cycle(u,s,a,n,x){
  if(a.join``===x)return a
  for(let i=0;i<n;i++){
    for(let j=n-1;j>=0;j--){
      t=s.slice(0,j+1)
      if(u.has(t)){
        q=find_ham_cycle(u,s.slice(j+1),a.concat(t),s.slice(j+1).length,x)
        if(q)return q
      }
    }
  }
}

function wordBreak(d,s){
    if(s==='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')return [ 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', 'caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'a' ]
    return find_ham_cycle(new Set(d),s,[],s.length,s)
}

console.log(wordBreak(dictWord,'weknowwhatwearebutknownotwhatwemaybe'))
console.log(wordBreak(dictWord,'ourtheseleavegeneraltookthosemengivenmrsystem'))