function formatAuthorName(name){
    let array = name.toUpperCase().split(' ')
    let string = array[array.length - 1] + ', '

    for(block in array){
        block != array.length - 1 ?
        string += array[block].substr(0, 1) + '. ' :
        () => {}
    }

    console.log(string)
}