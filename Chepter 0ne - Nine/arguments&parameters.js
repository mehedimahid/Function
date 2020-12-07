function add(a, b) {
	var result = a + b
	console.log(result)
}

add(10, 30)
add(50, 300)

var arr1 = [1, 2, 3]
var arr2 = [10, 25, 5]
var arr3 = [35, 25, 30]

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
// 	sum1 += arr1[i]
// }
// console.log(sum1)


// var sum2 = 0
// for (var i = 0; i < arr2.length; i++) {
// 	sum2 += arr2[i]
// }
// console.log(sum2)


// var sum3 = 0
// for (var i = 0; i < arr3.length; i++) {
// 	sum3 += arr3[i]
// }
// console.log(sum3)

function sumOfArray(arr) {				// sumOfArray(parameter)
	var sum = 0
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	console.log(sum)
}

				//Argument

sumOfArray(arr1)   //sumOfArray(Argument)  
sumOfArray(arr2)
sumOfArray(arr3)
