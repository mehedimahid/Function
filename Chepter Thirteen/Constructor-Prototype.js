
//tutorial number = 125

function Person(name) {
    this.name = name
}
Person.prototype.PI = 3.1416

var p1 = new Person('MH Mahid')
var p2 = new Person('Mehedi Hasan')

// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)
// console.log(Object.getPrototypeOf(p1) === Person.prototype)

console.log(p1)
console.log(p2)

