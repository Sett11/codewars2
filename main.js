function toBSTArray(arr){
    let a=arr.slice()
	if (a.length===0)return []
    for(let i=-1;++i<a.length;){
        if((a[2*i+1]!==undefined&&a[i]<a[2*i+1])){
            t=a[2*i+1]
            a[i*2+1]=a[i]
            a[i]=t
        }
        if((a[2*i+2]!==undefined&&a[i]>a[2*i+2])){
            t=a[i*2+2]
            a[i*2+2]=a[i]
            a[i]=t
        }
    }
    return isBSTArray(a)?a:toBSTArray(a)
}

function isBSTArray(a){
	if (a.length===0)return true
    for(let i=-1;++i<a.length;){
        if(!((a[2*i+1]===undefined||a[i]>=a[2*i+1])&&(a[2*i+2]===undefined||a[i]<=a[2*i+2])))return false
    }
	return true
}

function toArray(a){
	if (!isBSTArray(a))throw new Error('The parameter must be a BSTArray')
	return a.filter(e=>e).sort((a,b)=>a-b)
}

let array=[2, 4, 3, 5, 6]
let bst = toBSTArray(array)
console.log(isBSTArray(array))