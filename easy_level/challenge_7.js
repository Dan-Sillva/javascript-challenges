const array = [[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]

function orderNumber(array){
    var newArray = []

    for(a in array){
        for(b in array[a ]){
            newArray.push(array[a][b])
        }
    }

    newArray.sort((a, b) => a - b)
    return newArray
}