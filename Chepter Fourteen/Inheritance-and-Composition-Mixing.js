

function mixin(Terget, ...sources) {
    Object.assign(Terget, ...sources)
}

var canWalk = {
    walk: function(){
        console.log('Walking....')
    }
}

var canEat = {
    eat : function(){
        console.log('Eating....')
    }
}

var canSwim = {
    swim :function(){
        console.log('Swiming....')
    }
}

// var person = Object.assign({}, canEat, canWalk)
// person.name = 'MH Mahid'//kisu add korar proyojon porle

function Person (name){
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canEat, canWalk)

var person = new Person('Mehedi Hasan ')

console.log(person)

function GoldFish(name) {
    this.name = name
}
mixin(GoldFish.prototype, canEat, canSwim)

var fish = new GoldFish('bla bla bla.')
console.log(fish)
