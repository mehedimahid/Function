var arr = [1, 2, 3, 4, 5]

var sqrt = arr.map(function(value, index, arr){
    // return Math.floor(Math.random()*10)
    return value * value
})
   
console.log(arr)
console.log(sqrt)


// function myMap(arr, cb) {
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         var temp =cb(arr[i])
//         newArr.push(temp)
//     }
//     return newArr
// }
// // console.log(myMap(arr))
// var qb = myMap(arr, function(value){
//     return value * value * value
// })

// var mten = myMap(arr, function(value){
//     return value * 10
// })

// console.log(arr)
// console.log(qb)
// console.log(mten)



//***** map function arr kno poriborton kre na sudu new akta arr toiri kore
//original arrei takbe but nutun akta arr toiri hobe
//2ta arr hobe