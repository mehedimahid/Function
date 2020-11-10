
// Tutorial Number 92 - 93 - 94
// Scope, Nested Scope, Lexical Scope 

var x = 55

function test() {
    // var x = 45
    // console.log(x)

    function nested() {
        // var y = 50
        console.log(x)
    }
    // console.log(y)
    nested()
}

test()