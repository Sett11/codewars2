// const ELEMENTS={
//   H: 'Hydrogen',
//   He: 'Helium',
//   Li: 'Lithium',
//   Be: 'Beryllium',
//   B: 'Boron',
//   C: 'Carbon',
//   N: 'Nitrogen',
//   O: 'Oxygen',
//   F: 'Fluorine',
//   Ne: 'Neon',
//   Na: 'Sodium',
//   Mg: 'Magnesium',
//   Al: 'Aluminium',
//   Si: 'Silicon',
//   P: 'Phosphorus',
//   S: 'Sulfur',
//   Cl: 'Chlorine',
//   Ar: 'Argon',
//   K: 'Potassium',
//   Ca: 'Calcium',
//   Sc: 'Scandium',
//   Ti: 'Titanium',
//   V: 'Vanadium',
//   Cr: 'Chromium',
//   Mn: 'Manganese',
//   Fe: 'Iron',
//   Co: 'Cobalt',
//   Ni: 'Nickel',
//   Cu: 'Copper',
//   Zn: 'Zinc',
//   Ga: 'Gallium',
//   Ge: 'Germanium',
//   As: 'Arsenic',
//   Se: 'Selenium',
//   Br: 'Bromine',
//   Kr: 'Krypton',
//   Rb: 'Rubidium',
//   Sr: 'Strontium',
//   Y: 'Yttrium',
//   Zr: 'Zirconium',
//   Nb: 'Niobium',
//   Mo: 'Molybdenum',
//   Tc: 'Technetium',
//   Ru: 'Ruthenium',
//   Rh: 'Rhodium',
//   Pd: 'Palladium',
//   Ag: 'Silver',
//   Cd: 'Cadmium',
//   In: 'Indium',
//   Sn: 'Tin',
//   Sb: 'Antimony',
//   Te: 'Tellurium',
//   I: 'Iodine',
//   Xe: 'Xenon',
//   Cs: 'Caesium',
//   Ba: 'Barium',
//   Hf: 'Hafnium',
//   Ta: 'Tantalum',
//   W: 'Tungsten',
//   Re: 'Rhenium',
//   Os: 'Osmium',
//   Ir: 'Iridium',
//   Pt: 'Platinum',
//   Au: 'Gold',
//   Hg: 'Mercury',
//   Tl: 'Thallium',
//   Pb: 'Lead',
//   Bi: 'Bismuth',
//   Po: 'Polonium',
//   At: 'Astatine',
//   Rn: 'Radon',
//   Fr: 'Francium',
//   Ra: 'Radium',
//   Rf: 'Rutherfordium',
//   Db: 'Dubnium',
//   Sg: 'Seaborgium',
//   Bh: 'Bohrium',
//   Hs: 'Hassium',
//   Mt: 'Meitnerium',
//   Ds: 'Darmstadtium',
//   Rg: 'Roentgenium',
//   Cn: 'Copernicium',
//   Uut: 'Ununtrium',
//   Fl: 'Flerovium',
//   Uup: 'Ununpentium',
//   Lv: 'Livermorium',
//   Uus: 'Ununseptium',
//   Uuo: 'Ununoctium',
//   La: 'Lanthanum',
//   Ce: 'Cerium',
//   Pr: 'Praseodymium',
//   Nd: 'Neodymium',
//   Pm: 'Promethium',
//   Sm: 'Samarium',
//   Eu: 'Europium',
//   Gd: 'Gadolinium',
//   Tb: 'Terbium',
//   Dy: 'Dysprosium',
//   Ho: 'Holmium',
//   Er: 'Erbium',
//   Tm: 'Thulium',
//   Yb: 'Ytterbium',
//   Lu: 'Lutetium',
//   Ac: 'Actinium',
//   Th: 'Thorium',
//   Pa: 'Protactinium',
//   U: 'Uranium',
//   Np: 'Neptunium',
//   Pu: 'Plutonium',
//   Am: 'Americium',
//   Cm: 'Curium',
//   Bk: 'Berkelium',
//   Cf: 'Californium',
//   Es: 'Einsteinium',
//   Fm: 'Fermium',
//   Md: 'Mendelevium',
//   No: 'Nobelium',
//   Lr: 'Lawrencium'
// }

// function elementalForms(w,a=[],b=[],c=3){
//   w=w.toLowerCase()
//   for(let i=0;i<w.length;i++){
//     let innerArr=[]
//     for(let j=i;j<w.length+2;j++){
//       if(ELEMENTS[w.charAt(i).toUpperCase()+w.slice(i+1,j).toLowerCase()])innerArr.push(w.charAt(i).toUpperCase()+w.slice(i+1,j).toLowerCase())}
//       if(innerArr.length)a.push([...new Set(innerArr)]);innerArr=[]
//   }
//   while(c){
//     let inArr=[],z=a.slice().flat()
//     for(let i=0;i<z.length;i++){
//       for(let j=i;j<z.length;j++){
//         let tmp=z[i].toLowerCase()+z[j].toLowerCase()
//         if(tmp===w.slice(0,tmp.length))inArr.push([z[i],z[j]])
//       }
//     }
//     b.push(inArr);inArr=[]
//     c--
//   }
//   return b
// }

// console.log(elementalForms('precipitation'))
// console.log(elementalForms('NiSnNpCoSb'))
// console.log(elementalForms('snack'))

String.prototype.isAudio= function(){
  if(this.includes(' ')||this.slice(0,this.indexOf('.')).replace(/[a-zA-Z]/g,'').length!==0)return false
  return this.slice(this.indexOf('.')).match(/mp3|aac|flac|alac/)?true:false
}
String.prototype.isImage= function(){
  if(this.includes(' ')||this.slice(0,this.indexOf('.')).replace(/[a-zA-Z]/g,'').length!==0)return false
  return this.slice(this.indexOf('.')).match(/gif|jpg|jpeg|bmp|png/)?true:false
}

console.log("NothingElseMatters.mp3".isAudio())