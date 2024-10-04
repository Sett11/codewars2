function Event(){
  let store=[]
	this.subscribe=function(...args){
    args.filter(e=>typeof e==='function').forEach(e=>store.push(e))
  }
  this.unsubscribe=function(...args){
    for(let i=-1;++i<args.length;){
      for(let j=store.length;--j>=0;){
        if(store[j]==args[i]){
          store.splice(j,1)
          break
        }
      }
    }
  }
  this.emit=function(...arg){
    store.slice().forEach(e=>e.call(this,...arg))
  }
}

function l(arr) { arr.push('l'); }
function o(arr) { arr.push('o'); }

var e = new Event(),
    bucket = [];

e.subscribe(l, o, l);
e.emit(bucket)

console.log(bucket)

e.unsubscribe(o, l);
bucket = [];

e.emit(bucket);

console.log(bucket)