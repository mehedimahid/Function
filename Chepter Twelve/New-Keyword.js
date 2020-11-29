
//tutorial number 112


var Rectangle = function(width, height){     //name ar surute obosoi capital word hobe

    this.width = width
    this.height = height
    this.Draw = function (){
        console.log('I am a Rectangle')
        this.PrintProperties()
       
    }
    
    this.PrintProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}

function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argArray.slice(1))
    return obj
}

var rect = myNew(Rectangle, 45, 40)
rect.Draw()