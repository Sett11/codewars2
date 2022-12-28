const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/

console.log((REGEXP.test('fjd3IR9')));