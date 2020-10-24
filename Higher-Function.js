function add(a, b) {
    return a + b
}
function multipulate(a, b, func) {
    var c = a + b
    var d = a - b

    // function multiply() {
    //     var m = func(a, b)
    //     return c * d * m
    // }
    return  function () {
        var m = func(a, b)
        return c * d * m
    }
}

var multiply = multipulate(3, 4, add)
console.log(multiply())