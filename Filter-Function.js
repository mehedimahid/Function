// tutorial number 76

var arr = [4, 8, 1, 3, 5, 6, 9, 2]


var filteredArr = arr.filter(function(value){
    return value > 4
})
console.log(filteredArr)




function myFilter(arr, cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
       if (cb(arr[i], i, arr)) {
           newArr.push(arr[i])
       }
        
    }
    return newArr
}


console.log(myFilter(arr, function(value){
    return value % 2 === 0
}))

console.log(myFilter(arr, function(value){
   return value > 4
}))