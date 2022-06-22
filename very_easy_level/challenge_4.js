var n = 12345
var dit = (''+n).split('');

console.log(n, dit)

function hyperCalc(number) {
    var digits = (''+number).split('')
    var string = ''

    for(digit of digits){
        let value = parseInt(digit)
        string += (value ** 2)
    }

    return parseInt(string)
}