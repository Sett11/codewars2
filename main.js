const findOddNames = list => list.filter(el => el.firstName.split``.reduce((acc,curr) => acc + curr.charCodeAt(), 0) % 2 !== 0)

console.log(
  findOddNames([{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}])
);
