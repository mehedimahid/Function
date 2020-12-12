//tutorial number 124


var person = {
    name : 'MH Mahid'
}

// console.log(person)


// console.log(person.toString())

// for (var i in person){
//     console.log(i)
// }

console.log(Object.keys(person))

// var Descriptor = Object.getOwnPropertyDescriptor(person, 'name') //(kar , kon property)
// console.log(Descriptor)

let baseObj = Object.getPrototypeOf(person)
console.log(baseObj)

let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
console.log(descriptor)

Object.defineProperty(person, 'name',{
    configurable: false,
    enumerable: false,
    writable : false, //bahire teke change kora jabe .true takle jabe
    value : 'Mehedi Hasan Mahid' //ata kono vabe change kora jabe 
})

console.log(Object.keys(person))

// for (var i in person){  //crome kore dekte hobe
//     console.log(i)
// }


console.log(person.name = 'mehedi hasan')
console.log(person) //kono change hobe na

console.log(delete person.name) 