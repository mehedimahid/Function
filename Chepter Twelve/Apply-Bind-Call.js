

//tutorial number 116

function myFun(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

// myFun.call({a: 30, b: 20}, 25, 25) // call() avabe dite hobe
// // myFun.apply({a: 30, b: 20}, 25, 25) //avabe kaj korbe na 
// myFun.apply({a: 30, b: 20},[ 25, 25]) //apply avabe dite hobe

// // var testBind =  myFun.bind({a: 30, b: 20}, 3, 7) //avabe korle only akbar beboher kora jabe
// // testBind()

var testBind = myFun.bind({a: 30, b: 20})
testBind(3, 7) //avabe korle koyekbar beboher kora jabe
testBind(15, 5)