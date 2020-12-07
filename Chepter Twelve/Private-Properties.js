
//tutorial number 119


// var Rectangle = function(width, height){     //name ar surute obosoi capital word hobe

//    
//     var position = {
//         x : 50,
//         y : -100
//     }
//      this.width = width
//      this.height = height
    
//     var PrintProperties = function () {
//         console.log('My Width is ' + width)   
//         console.log('My Height is ' + height)
//     }

//     this.Draw = function (){
//         console.log('I am a Rectangle')
//         PrintProperties()
//         console.log('Position : x =' + position.x + 'y =' + position.y)
       
//     }
// }

// var rect = new Rectangle(45, 50)
// rect.Draw()


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

    this.Draw = function (){
        console.log('I am a Rectangle')
        PrintProperties()
        console.log('Position : x =' + position.x + 'y =' + position.y)
       
    }
}

var rect = new Rectangle(45, 50)
rect.Draw()


