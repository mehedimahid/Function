
//tutorial number 80


function greet(msg) {
    function greetings(name) {
        return msg + ' , ' + name + ' ! '
    }
    return greetings
}

var msg = greet('Good Morning')
// console.log(typeof msg)

var name = msg('MH Mahid')
var gn = greet('Good Night')
var hello = greet('hello')

console.log(name)
console.log(gn('Mehedi'))
console.log(hello('Mahid'))


// function base(b) {
//      function power(n) {
//         var result = 1
//         for (var i = 0; i < b; i++) {
//           result *= n  
            
//         }
//         return result
//     }
//     return power
// }
// or

function base(b) {
    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++) {
          result *= n  
            
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))


var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))