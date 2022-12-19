var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count === 0){
      return '0=0'
    }
    if(count < 0){
      return `${count}<0`
    }
  const arr = []
  while(count>=0){
    arr.push(count)
    count--
  }
  return `${arr.reverse().join('+')} = ${arr.reduce((a,c) => a + c, 0)}`
  };

  return SequenceSum;

})();