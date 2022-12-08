const rot13 = (message) => {
  const alOrg = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, el => alOrg[alOrg.indexOf(el) + 13]);
}