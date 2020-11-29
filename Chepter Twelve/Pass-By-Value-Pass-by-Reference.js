//tutorial number 117

// Pass By Value vs Pass by Reference
// call By Value vs call by Reference


//Pass By Value & call By Value
var n = 10

function change(n) {
    n += 100
    console.log(n)
}
change(n)
console.log(n)
 //premetive data(number, bulean, NaN, string ,undefine,null) function body change korte pare na


 // Pass by Reference
var obj = {
    a: 10,
    b: 20
}

function changeObj(obj) {
    obj.a += 100
    obj.b += 100
    console.log(obj)
}
changeObj(obj)
console.log(obj)
