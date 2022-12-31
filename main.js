class Dictionary {
  constructor() {
    this.obj = {};
  }

  newEntry(key, value) {
    return this.obj[key] = value;
  }

  look(key) {
    return this.obj[key] || `Can\'t find entry for ${key}`;
  }
}