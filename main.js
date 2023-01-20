function encode(str) {
    return str.split``.map((el)=>{
        if(el==='A'){
            el = 'G'
            return el
        }
        if(el==='G'){
            el = 'A'
            return el
        }
        if(el==='a'){
            el = 'g'
            return el
        }
        if(el==='g'){
            el = 'a'
            return el
        }

        if(el==='D'){
            el = 'E'
            return el
        }
        if(el==='E'){
            el = 'D'
            return el
        }
        if(el==='d'){
            el = 'e'
            return el
        }
        if(el==='e'){
            el = 'd'
            return el
        }

        if(el==='R'){
            el = 'Y'
            return el
        }
        if(el==='Y'){
            el = 'R'
            return el
        }
        if(el==='r'){
            el = 'y'
            return el
        }
        if(el==='y'){
            el = 'r'
            return el
        }

        if(el==='P'){
            el = 'O'
            return el
        }
        if(el==='O'){
            el = 'P'
            return el
        }
        if(el==='p'){
            el = 'o'
            return el
        }
        if(el==='o'){
            el = 'p'
            return el
        }

        if(el==='L'){
            el = 'U'
            return el
        }
        if(el==='U'){
            el = 'L'
            return el
        }
        if(el==='l'){
            el = 'u'
            return el
        }
        if(el==='u'){
            el = 'l'
            return el
        }

        if(el==='K'){
            el = 'I'
            return el
        }
        if(el==='I'){
            el = 'K'
            return el
        }
        if(el==='k'){
            el = 'i'
            return el
        }
        if(el==='i'){
            el = 'k'
            return el
        }
        return el
    }).join``
}

function decode(str) {
    return str.split``.map((el)=>{
        if(el==='A'){
            el = 'G'
            return el
        }
        if(el==='G'){
            el = 'A'
            return el
        }
        if(el==='a'){
            el = 'g'
            return el
        }
        if(el==='g'){
            el = 'a'
            return el
        }

        if(el==='D'){
            el = 'E'
            return el
        }
        if(el==='E'){
            el = 'D'
            return el
        }
        if(el==='d'){
            el = 'e'
            return el
        }
        if(el==='e'){
            el = 'd'
            return el
        }

        if(el==='R'){
            el = 'Y'
            return el
        }
        if(el==='Y'){
            el = 'R'
            return el
        }
        if(el==='r'){
            el = 'y'
            return el
        }
        if(el==='y'){
            el = 'r'
            return el
        }

        if(el==='P'){
            el = 'O'
            return el
        }
        if(el==='O'){
            el = 'P'
            return el
        }
        if(el==='p'){
            el = 'o'
            return el
        }
        if(el==='o'){
            el = 'p'
            return el
        }

        if(el==='L'){
            el = 'U'
            return el
        }
        if(el==='U'){
            el = 'L'
            return el
        }
        if(el==='l'){
            el = 'u'
            return el
        }
        if(el==='u'){
            el = 'l'
            return el
        }

        if(el==='K'){
            el = 'I'
            return el
        }
        if(el==='I'){
            el = 'K'
            return el
        }
        if(el==='k'){
            el = 'i'
            return el
        }
        if(el==='i'){
            el = 'k'
            return el
        }
        return el
    }).join``
}

console.log(decode("Gug hgs g cgt"))