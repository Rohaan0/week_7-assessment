

const isPangram = function(str) {
    let Arrstr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < alphabet.length; i++){
        if (Arrstr.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true
}



console.log(isPangram('The quick brown fox jumps over the lazy dog!'))

console.log(isPangram("I like cats, but not mice"))