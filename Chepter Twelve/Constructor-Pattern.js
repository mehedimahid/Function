
//Tutorial number - 111

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

var rect = new Rectangle(10, 9)
rect.Draw()