function replaceDashesAsOne(s) {
  s=s.replace(/- +-|--/g,'-')
  return s.match(/--|- +-/)?replaceDashesAsOne(s):s
}
console.log(replaceDashesAsOne("we-are- - - code----warriors.-"))
console.log(replaceDashesAsOne("a---b- - -c"))
console.log(replaceDashesAsOne(" - - gmsvdz--  - -yfdttxusa" ))