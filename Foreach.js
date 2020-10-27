

//forEach original Array ke modified kore



var arr = [1, 2, 3, 4, 5]

var sum = 0
arr.forEach(function (value, index, arr) {  //forEach(function//callbackfunction(value, index, Array dite hobei){})
    // console.log(value, index, arr)
    sum += value
})
console.log(sum)


// forEach je vabe kaj kore: 

function myforEach(arr, cb) {
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i])  // value return korbe
        cb(arr[i], i, arr)
    }

}

var sum = 0
myforEach(arr, function(value, index, arr) {
    // console.log(value)   // value return korbe
    console.log(value, index, arr)
    sum += value
})
console.log(sum)

myforEach(arr, function (value, index, arr) {
    arr[index] = value + 5
})
console.log(arr)