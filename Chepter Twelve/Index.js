

//Tutorial Number 108

var rect = {
    width : 100,
    height : 50,

    Draw : function (){
        console.log('I am a Rectangle')
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}

rect.Draw()

rect.height = 100
rect.Draw()
