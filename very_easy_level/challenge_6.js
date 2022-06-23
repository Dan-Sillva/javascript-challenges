function ondurHistory2(history) {
    var words = history.split(' ')
    for (word in words) { words[word] = reverse(words[word])}
    return words.join(' ')

}

function reverse (string){
    return string.split('').reverse().join('')
}