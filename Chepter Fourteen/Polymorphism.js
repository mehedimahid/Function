//Tutorial Number 135

function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color) {
    this.color = color
}

Shape.prototype.common = function () {
    console.log('I am Common Mathod')
}


function Square(width, color) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.common = function(){
    
    console.log('I am calling from Square and i have overridden')  
}


Square.prototype.draw = function(){
    console.log('Drawing')
}

var sqr = new Square(45, 'green')
// var shape = new Shape()



function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function(){
    // Shape.prototype.common.call(this)
    console.log('I am calling from Circle and i have overridden')   //method override
}

var circle = new Circle(5, 'red')

var shape = new Shape('Pirple')

var shapeArr = [circle, shape, sqr]

for (var i of shapeArr) {
    i.common()
}



console.log(sqr instanceof Square) // instanceof dara ai object ta kar object seta deka jay,
                                    // ai object ba child ar parent ke 
console.log(sqr instanceof Shape)
console.log(sqr instanceof Circle)

console.log(circle instanceof Shape)
console.log(circle instanceof Circle)
console.log(circle instanceof Square)