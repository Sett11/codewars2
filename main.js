function checkParity(p,b){
    const r=b.replace(/0/g,'').length
    return r%2!==0&&p==='even'?1:r%2===0&&p==='even'?0:r%2!==0&&p==='odd'?0:1
  }

  console.log(checkParity('odd','101010'))