//tutorial number 78

var arr = [7, 5, 1, 4, 2, 6, 3, 8, 9]

// var result = arr.find(function(value){
    
//         return value === 9
    
// })
// console.log(result)

// var result = arr.findIndex(function(value){
    
//     return value === 9

// })
// console.log(result)

function myFind (arr, cb){
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            // return arr[i]
            return i //index number return korbe
        }
        
    }
}

var result = myFind(arr, function(value){
    return value === 9
})
console.log(result)