function findLongestWord(arr){
    newArr = []
    for (i = 0; i < arr.length; i++){
                newArr.push(arr[i].length)
    }
    console.log(Math.max(...newArr))
}


findLongestWord(['hi', 'hello'])