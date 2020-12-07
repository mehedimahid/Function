function currying(a) {
    return function(b) {
        return function(c){
            return a + b + c
        }
    }
}

var result = currying(5)(15)(10)
console.log(result)