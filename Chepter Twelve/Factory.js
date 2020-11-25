
//Tutorial Number 110

//obj hoyar karone comma obossoi dite hobe
var CreateRact = function (width, height){
    return{
        width : width,
        height : height,

        Draw : function (){
            console.log('I am a Rectangle')
            this.PrintProperties()
           
        },
        
        PrintProperties : function () {
            console.log('My Width is ' + this.width)
            console.log('My Height is ' + this.height)
        }
    }
}

var rect1 = CreateRact(10, 5)
rect1.Draw()

var rect2 = CreateRact(105, 50)
rect2.Draw()

var rect3 = CreateRact(100, 150)
rect3.Draw()