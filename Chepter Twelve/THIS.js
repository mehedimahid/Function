

//Tutorial Number 109



var rect = {
    width : 100,
    height : 50,

    Draw : function (){
        console.log('I am a Rectangle')
        this.PrintProperties()
        console.log(this)
    },
    
    PrintProperties : function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }
}

rect.Draw()


// function myfun() {
//     console.log(this)
    
// }
// myfun()


function myfun() {
    console.log(this)
    rect.PrintProperties()
    
}
new myfun()

var another = {
    width : 55,
    height : 60,
    print : rect.PrintProperties
}

console.log(another.print)
another.print()