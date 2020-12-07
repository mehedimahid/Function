//tutorial number 124


var person = {
    name : 'MH Mahid'
}

// console.log(person)


// console.log(person.toString())

// for (var i in person){
//     console.log(i)
// }

// console.log(Object.keys(person))

var Descriptor = Object.getOwnPropertyDescriptor(person, 'name') //(kar , kon property)
console.log(Descriptor)