function contamination(text, char){
  return text.split('').map(el=>el=char).join('')
}
