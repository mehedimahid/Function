
//Tutorial Number 130

function Shape() {
    
}
// Shape.prototype = {
//     common : function () {   //arokom kore na deya valo
//        console.log('I am Common Mathod')
//     }
// }

Shape.prototype.common = function () {
    console.log('I am Common Mathod')
}


function Square(width) {
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function(){
    console.log('Drawing')
}

var sqr = new Square(45)
var shape = new Shape()

function Circle() {
    
}

Circle.prototype = Object.create(Shape.prototype)

var circle = new Circle()