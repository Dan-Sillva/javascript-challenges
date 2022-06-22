function reverseArray(array) {
    var newArray = []

    for (let cycle = array.length-1; cycle >= 0; cycle--){
        newArray[newArray.length] = array[cycle]
    }
    return newArray 
}