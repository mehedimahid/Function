// first-class-function 

function add(a, b) {
    return a + b
}

//1.A Function can be stored in a veriable
var sum = add
console.log(sum(4, 6))
console.log(typeof sum)

//2.A Function can be stored in a Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](3, 7))

//3.A Function can be stored in a Object
var obj = {
    sum : add
}
console.log(obj)
console.log(obj.sum(10, 5))

//4. We can create Function as Need
setTimeout(function () {
    console.log('I have created.....')
},100)


// LOOK Higher Function 

//5. We can pass Function as an Argument
//6. We can returt Function from another Function