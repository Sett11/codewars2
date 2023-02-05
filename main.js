class FileMaster {
  constructor(filepath) {
    this.filepath=filepath
  }
  
  extension() {
    return this.filepath.match(/\..+$/g)[0].replace(/\./,'')
  }
  
  filename() {
    return this.filepath.replace(/\..+$/,'').replace(/.+\//,'')
  }
  
  dirpath() {
    return this.filepath.replace(/\..+$/,'').replace(/.+\//,'$& ').split` `[0]
  }
}
const r = new FileMaster('/Users/person1/Pictures/house.png')
console.log(r.dirpath())