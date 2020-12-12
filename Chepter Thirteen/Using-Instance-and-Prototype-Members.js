

//Tutorial number 127

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
