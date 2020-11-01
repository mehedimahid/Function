//tutorial number 79



var person = [
    {
        name : "A",
        age : 24
    },

    {
        name: 'B',
        age: 19
    },
    {
        name:'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]
                // ata alada kno arr return kore na tai r kno variable dorar dorker nei

var arr = [6, 4, 9, 2, 5, 7, 1, 8, 3]
// arr.sort()             //negetive number na takle         
// console.log(arr)
// person.sort()
// console.log(person)
            //negative number takle
                                       //asending order (soto teke boro)

// arr.sort(function(a, b){
//     if(a > b){
//         return 1
//     }else if(a < b){
//         return -1
//     }else{
//         return 0
//     }
// })

// console.log(arr)

                                   //descending order(boro teke soto)

arr.sort(function(a, b){
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})

console.log(arr)

person.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(person)

                    //  প্রত্যেক (every)

var res1 = arr.every(function(value){
    return value % 2 === 0      //protektakei even number hote hobe noile false asbe
})
console.log(res1)


var res2 = arr.every(function(value){
    return value >= 0     //protektakei positive number ote hobe noile false asbe
})
console.log(res2)

                //কিছু(some)

var res3 = arr.some(function(value){
    return value % 2 === 1              //ন্যূনতম akta odd number ase tai result true asbe
})
console.log(res3)


var res4 = arr.some(function(value){
    return value < 0
})

console.log(res4)