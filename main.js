function solution(n) {
  const arr = String(n.toFixed(1)).split`.`;
  const lastElem = Number(arr[arr.length - 1]);
  return lastElem === 1 || lastElem === 2
    ? Math.floor(n)
    : lastElem === 3 || lastElem === 4
    ? Math.floor(n) + 0.5
    : lastElem === 6 || lastElem === 7
    ? Math.floor(n) + 0.5
    : lastElem === 8 || lastElem === 9
    ? Math.ceil(n)
    : n
}
console.log(solution(720));
