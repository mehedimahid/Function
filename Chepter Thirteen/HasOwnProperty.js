

//Tutorial number 128

function Square (width) {
    this.width = width         
    
    this.getwidth = function(){
        console.log('My width is ' + this.width)
        // this.draw()
    }
}
Square.prototype = {

    draw : function (){  
        this.getwidth()      
        console.log('draw')
    },
    toString: function() {
        return 'My width is =' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)


sqr1.hasOwnProperty('width')    //kono properti tar nijosso properti kna ta hasOwnProperty dara berkora jay
sqr1.hasOwnProperty('getwidth')

console.log(Object.keys(sqr1))      //sudu jodi instance members pete chai tahole sudo object.keys method beboher korle cholbe

for (var i in sqr1) {
    console.log(i)
}       //jodi amra sob(prototype and instance) members der pete chai tahole for in loop beboher korte hobe