var BARK ='woof woof';
var SLEEP='zzzzzzzzz....';

function dog_bark_by_default(b=true){
  return b?BARK:SLEEP
}

function dog_bark_only_if_told_so(b=false){
  return b?BARK:SLEEP
}

function dog_dont_bark_by_default(b=true){
  return b?SLEEP:BARK
}

function dog_dont_bark_only_if_told_so(b=false){
  return b?SLEEP:BARK
}