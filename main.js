String.prototype.vowel = function() {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
      return (/^[aeiouAEIOU]$/g).test(this);
  };