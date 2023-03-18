function findDuplicates(a,b=[]) {
   for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(Object.entries(a[i]).join``===Object.entries(a[j]).join``){
            b.push(a[j])
            a.splice(j,1)
        }
    }
   }
   return b
}

console.log(findDuplicates([  { FirstName: 'Johnatan', LastName: 'Joestar', UserName: 'JoJo' },
 { FirstName: 'Dio', LastName: 'Brando', UserName: 'DIO' },
 { FirstName: 'Joseph', LastName: 'Joestar', UserName: 'JoJo' },
 {
  FirstName: 'Kars',
  LastName: '',
  UserName: 'the ultimate being' },
 { FirstName: 'Johnatan', LastName: 'Joestar', UserName: 'JoJo' } ]))