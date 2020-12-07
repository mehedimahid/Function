
//tutorial number 120

//jodi privet properties  acsess nite chay

var Rectangle = function(width, height){     //name ar surute obosoi capital word hobe

   
    var position = {
        x : 50,
        y : -100
    }

    this.width = width
    this.height = height
    
    var PrintProperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind(this)

    // this.getposition = function(){
    //     return position              //avabeo hobe
    // }

    this.Draw = function (){
        console.log('I am a Rectangle')
        PrintProperties()
        console.log('Position : x =' + position.x + 'y =' + position.y)
       
    }
    Object.defineProperty(this, 'position', {               //avabeo hobe
        get: function()              //getter
        {
            return position
        },
        set: function(value){
            position = value
        }
    })
}

var rect = new Rectangle(45, 50)
rect.Draw()
rect.position ={
    x: 100,
    y: -450
}
// console.log(rect.getposition())
console.log(rect.position)

