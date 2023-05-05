const envelope=
`* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* From: Wang X.J                                         * * * * *  *
*       NO.56 Middle School                              * Stamp *  *
*       Shanghai                                         * * * * *  *
*       People's Republic Of China                                  *
*                           To: ____________________________        *
*                               ____________________________        *
*                               ____________________________        *
*                               ____________________________        *
*                                                ZipCode: XX-xxxxx  *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *`

const contacts=`Address: Bison Street,Monroe Massachusetts,Argentina ZipCode: DK-31976 Name: Peter Brien
ZipCode: OS-18888 Name: Arthur Paternos Address: Oxford Street,Cambridge Wisconsin,Liechtenstein
Address: Bison Street,Madison Rhode Island,Antigua and Barbuda ZipCode: TM-57447 Name: Peter Gone
Name: Arthur Paternos Address: Haramburu Street,Helena Connecticut,Trinidad and Tobago ZipCode: AS-42342
Name: Anna Stevens ZipCode: XF-17822 Address: Green Road,Omaha Arizona,Bangladesh
Address: PO Box 530 Pollocksville,Olympia Virginia,Italy ZipCode: UE-13576 Name: R Steell
Name: Paulo Divino ZipCode: FC-34043 Address: Joly Street,Helena Tennessee,Uzbekistan
Name: W Mount ZipCode: MC-15407 Address: Alphandria Street.,Cambridge Iowa,China
Address: Alphandria Street.,Naples Montana,Sao Tome and Principe ZipCode: NO-18672 Name: Peter Reedgrave
Address: Moon Street Peterville,Olympia Connecticut,St.Vincent ZipCode: EW-19854 Name: Paulo Divino
Address: Moon Street Peterville,Boston Hawaii,Bangladesh ZipCode: QM-44621 Name: Donald Drinkaw
Address: High Street,Philadelphia Kansas,Albania Name: P McDon ZipCode: IU-55828
ZipCode: DX-37249 Name: Peter Reedgrave Address: Bison Street,Boston Tennessee,Australia
Name: Paulo Divino Address: Revolution Street,Southampton Indiana,Trinidad and Tobago ZipCode: FA-23666
Address: PO Box 530 Pollocksville,Venice Minnesota,Sao Tome and Principe Name: C Powel ZipCode: QB-47702
Name: William Saurin Address: Oxford Street,Buffalo Delaware,Liechtenstein ZipCode: RB-56102
Address: Green Rd.,Washington D.C. Maryland,Yemen ZipCode: QW-30868 Name: Laurence Pantow
Name: P Reed Address: Bellevue Street,Reading New Hampshire,Bangladesh ZipCode: FC-44739
Address: PO Box 530 Pollocksville,Rome Wyoming,Antigua and Barbuda ZipCode: KF-58199 Name: Jr Part
Name: Peter Brien ZipCode: ZW-31962 Address: Alphand St.,Cambridge Nevada,Venezuela
Address: Quora Street,Sioux Falls Idaho,Zambia ZipCode: KX-49795 Name: Anastasia
Address: Haramburu Street,Chicago Georgia,Uzbekistan Name: Paul Dive ZipCode: NL-26036
Address: Quora Street,Madison Virginia,Trinidad and Tobago ZipCode: MP-18455 Name: Ray Charles
ZipCode: BR-12234 Address: Bellevue Street,Columbia Arkansas,Dominica Rep. Name: Bernard Deltheil
Address: Revolution Street,Madison New Jersey,Sao Tome and Principe ZipCode: YL-27373 Name: Peter Reeves
Name: Peter Gone Address: PO Box 5300 Albertville,Ann Arbor Colorado,Central African Republic ZipCode: TW-19293
ZipCode: DF-36317 Name: W Mount Address: Moon Street Peterville,Bethlehem New Hampshire,Zambia
Name: C Saborn Address: Quora Street,Little Cairo Oklahoma,Indonesia ZipCode: GP-32486
Address: Green Road,New York Illinois,Bulgaria Name: Paulo Divino ZipCode: QJ-36489
Name: P McDon ZipCode: MM-47163 Address: Alphand St.,Milan Rhode Island,Ivory Coast
Address: Bellevue Street,Philadelphia Massachusetts,China ZipCode: MB-45730 Name: Bernard Deltheil
Name: W Mount Address: Bellevue Street,Columbia Florida,Ivory Coast ZipCode: YP-21212
Address: High Street,Atlanta Massachusetts,Ivory Coast ZipCode: GA-25635 Name: Peter Brien
Address: Quora Street,Little Cairo Delaware,Zambia Name: F Fulgur ZipCode: NW-47641
Name: Pete Highman Address: Green Road,Chelsea Colorado,Italy ZipCode: XN-49209
ZipCode: WE-41374 Address: Green Rd.,Springfield Virginia,United Kiongdom Name: R Steell
ZipCode: QI-36956 Address: Alphandria Street.,Birmingham Ohio,Argentina Name: Peter Brien
Name: W Mount ZipCode: SA-22762 Address: PO Box 530 Pollocksville,Madison Indiana,Italy
ZipCode: KH-50734 Address: Bison Street,Chicago Alaska,Uzbekistan Name: Arthur Paternos
ZipCode: FF-33832 Name: R Steell Address: High Street,Rome Kansas,Trinidad and Tobago
Name: W Mount ZipCode: FA-46986 Address: High Street,Washington D.C. Michigan,Indonesia
Name: Peter Crush ZipCode: GK-46846 Address: Bellevue Street,Venice Washington,Central African Republic
Address: Main Street Boulder,Milan Iowa,Venezuela ZipCode: GV-50237 Name: Arthur Clarke
Address: Bellevue Street,Naples Nebraska,Albania Name: Peter Reedgrave ZipCode: CK-12474
ZipCode: UT-32837 Name: Bernard Deltheil Address: Oxford Street,Cheyenne New York,Liechtenstein
Address: Bellevue Street,Sioux Falls New Mexico,Liechtenstein ZipCode: EQ-55707 Name: Paulo Divino
ZipCode: VC-20987 Address: Green Road,Rome Tennessee,Italy Name: Peter Gone
Address: Revolution Street,Sioux Falls Washington,Brazil ZipCode: CP-48807 Name: John Freeland
Address: Green Rd.,Chicago Montana,Central African Republic ZipCode: KM-45542 Name: Peter Reeves
Address: Oxford Street,Augusta New Mexico,Dominica Rep. Name: Laurence Pantow ZipCode: MT-52195`

function writeLetterTo(f){
  if(!contacts.match(f))return ''
  let c=contacts.split`\n`.filter(e=>e.match(f))[0].replace(/Name: |Address: |ZipCode: /g,e=>e==='Name: '?'-&-a ':e==='Address: '?'-&-b ':e==='ZipCode: '?'-&-c ':'').split`-&-`.filter(e=>e).map(e=>e.trim()).sort((a,b)=>a[0].localeCompare(b[0])).map(e=>e.slice(2))
  let r=envelope.split`\n`,a=r.slice(0,5),b=r.slice(5),[q,w,z]=c
  q=[...q]
  while(q.length)b[0]=b[0].replace(/_/,e=>q.shift())
  b[0]=b[0].replace(/_/g,' ')
  w=w.split`,`.map(e=>[...e])
  for(let i=0;i<w.length;i++){
    while(w[i].length)b[i+1]=b[i+1].replace(/_/,e=>w[i].shift())
    b[i+1]=b[i+1].replace(/_/g,' ')
  }
  z=[...z.replace(/-/,'')],b[b.length-2]=b[b.length-2].replace(/X/gi,'x')
  while(z.length){
    b[b.length-2]=b[b.length-2].replace(/x/g,e=>z.shift())
  }
  return a.concat(b).join`\n`
}

console.log(writeLetterTo("W Mount"))