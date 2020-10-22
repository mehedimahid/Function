function addAll() {
	var sum = 0
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return sum
}

var result = addAll(1, 2, 3, 4, 5)
console.log(result)


function person(name, email) {
	return {
		name : name,
		email : email
	}

	console.log('i will never be show')				//return ar pore ar kono kisu kaj korbe na
}

var p1 = person('Mehedi Hasan', 'mehedimahid19@gmail.com')
console.log(p1)

