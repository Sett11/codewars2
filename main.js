function nicknameGenerator(name) {
  return name.length < 4
    ? "Error: Name too short"
    : /[a|i|o|u|e]/i.test(name[2])
    ? name.slice(0, 4)
    : name.slice(0, 3);
}
console.log(nicknameGenerator("Samantha"));
