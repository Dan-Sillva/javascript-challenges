function mediaNota(){
    var media = 0
    for(let cycle = 0; cycle < arguments.length; cycle++){
        media += arguments[cycle]
    }

    return (media / arguments.length)
}