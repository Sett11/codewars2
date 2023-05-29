function getTagContent(h,t,r=[]){
    let a='<'+t,b='</'+t+'>',c=h.indexOf(a),d=h.indexOf(b)
    while(c>-1||d>-1){
        r.push(h.slice(c+a.length,d))
        h=h.slice(d+b.length),c=h.indexOf(a),d=h.indexOf(b)
    }
    r=r.filter(e=>e).map(e=>{
       e=e.replace(/\n/g,'').trim(),v=e.lastIndexOf('>')
       return e.slice(v===-1?0:v+1).trim()
    })
    return r[0]==='</html'?[]:r
}

console.log(getTagContent(`<article id="animals">
  
<h1 class="main-heading">Nature's Wonders</h1>
<p>In this article we discuss animals.</p>

<section id="birds">
  <h2 class="favourite">Birds</h2>
  <p>
    Forest is a wonderful place to see birds.
  </p>
</section>

<section id="butterflies">
  <h2>Butterflies</h2>
  <p>
    Butterflies possess some of the most striking colour displays found in nature.
  </p>
</section> 

</article>`,'h1'))
console.log(getTagContent(`<article id="animals">
  
<h1 class="main-heading">Nature's Wonders</h1>
<p>In this article we discuss animals.</p>

<section id="birds">
  <h2 class="favourite">Birds</h2>
  <p>
    Forest is a wonderful place to see birds.
  </p>
</section>

<section id="butterflies">
  <h2>Butterflies</h2>
  <p>
    Butterflies possess some of the most striking colour displays found in nature.
  </p>
</section> 

</article>`,'h2'))
console.log(getTagContent(`<article id="animals">
  
<h1 class="main-heading">Nature's Wonders</h1>
<p>In this article we discuss animals.</p>

<section id="birds">
  <h2 class="favourite">Birds</h2>
  <p>
    Forest is a wonderful place to see birds.
  </p>
</section>

<section id="butterflies">
  <h2>Butterflies</h2>
  <p>
    Butterflies possess some of the most striking colour displays found in nature.
  </p>
</section> 

</article>`,'p'))