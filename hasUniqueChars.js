

const hasUniqueChars = (str) => {
    for(let i = 0; i < str.length; i++){
        for (j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars('monday'))
console.log(hasUniqueChars('moonday'))