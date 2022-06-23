function ondurHistory1(history) {
    var result = ''
    for (char of history.toLowerCase()){
        char > result ? result = char : () => {}
    }

    return result
}