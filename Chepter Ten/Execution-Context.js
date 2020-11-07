

// tutorial number 83


function a() {
    b()
    console.log('i am function a')
}

function b() {
    d()
    console.log('i am function b')
}

function c() {
    console.log(' i am function c')
}

function d() {
    c()
    console.log(' i am function d')
}

var x = 100
a()
console.log('i am global ')

// Execution of c function Context
// Execution of d function Context
// Execution of b function Context
// Execution of a function Context
// Execution of global function Context