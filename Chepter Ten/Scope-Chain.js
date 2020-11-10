

var a = 20

function A() {

    var  b = 10

    function B() {
        var c = 15
        console.log(c)
    }

    function C() {
        var d = 25
        console.log(d)
    }
    console.log(b)
    B()
    C()
    D(b)

}

function D(n) {
    return n + a
}

// Scope Chain

// A - a, b, B(), C(), D()
// B -  a, b, c, B() C(), D()
// C -  a, b, d, B() C(), D()
// D - a, n, A()