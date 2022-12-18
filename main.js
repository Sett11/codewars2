function findMissingNumber(sequence) {
  if (sequence == "") return 0;
  sequence = sequence.split(" ").map(Number);
  if(sequence.length === 0) return 0
  if(sequence.some(el => Number.isNaN(Number(el)))){
    return 1
  }
  for (let i = 1; i <= sequence.length; i++) {
    if (i !== sequence[i - 1]) return i;
  }
  return 0;
}