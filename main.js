class FileNameExtractor {
  extractFileName(dirtyFileName) {
    let arr = dirtyFileName.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "_") {
        arr = arr.slice(i + 1);
        break;
      }
    }
    for (let i = arr.length; i > 0; i--) {
      if (arr[i] === ".") {
        arr = arr.slice(0, i);
        break;
      }
    }
    return arr.join("");
  }
}
const file = new FileNameExtractor();
console.log(file.extractFileName("1231231223123131_myFile.tar.gz2"));
