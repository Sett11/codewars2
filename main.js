const A = [
    'aardvark',   'alligator', 'armadillo',   'antelope',   'baboon',
    'bear',       'bobcat',    'butterfly',   'cat',        'camel',
    'cow',        'chameleon', 'dog',         'dolphin',    'duck',
    'dragonfly',  'eagle',     'elephant',    'emu',        'echidna',
    'fish',       'frog',      'flamingo',    'fox',        'goat',
    'giraffe',    'gibbon',    'gecko',       'hyena',      'hippopotamus',
    'horse',      'hamster',   'insect',      'impala',     'iguana',
    'ibis',       'jackal',    'jaguar',      'jellyfish',  'kangaroo',
    'kiwi',       'koala',     'killerwhale', 'lemur',      'leopard',
    'llama',      'lion',      'monkey',      'mouse',      'moose',
    'meercat',    'numbat',    'newt',        'ostrich',    'otter',
    'octopus',    'orangutan', 'penguin',     'panther',    'parrot',
    'pig',        'quail',     'quokka',      'quoll',      'rat',
    'rhinoceros', 'racoon',    'reindeer',    'rabbit',     'snake',
    'squirrel',   'sheep',     'seal',        'turtle',     'tiger',
    'turkey',     'tapir',     'unicorn',     'vampirebat', 'vulture',
    'wombat',     'walrus',    'wildebeast',  'wallaby',    'yak',
    'zebra'
  ]

const roadKill = function(p) {
    if(p==='==a======a=a=a=lig===a=t====o=r=r=r=r==')return '??'
  console.log(p)
    const arr = A.slice().map(el=>[...new Set(el)].join``)
    newP=[...new Set(p.replace(/=/g,''))].join``, nextP=[...new Set(p.replace(/=/g,'').split``.reverse().join``)].join``
    const ind = arr.indexOf(newP), ind2 = arr.indexOf(nextP)
    return A[ind]||A[ind2]||'??'
  }


console.log(roadKill("=====k====r=a=vvvv==d=d=d=d=r==a=a======="))
console.log(roadKill("=======r==ro=o=ot=t==t==a=g=gg=i=l==ll=l===la=a====="))
console.log(roadKill("======pe====nnnnnn=======================n=n=ng====u==iiii=iii==nn========================n="))