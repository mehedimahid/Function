
//Tutorial number 126

function Square (width) {
    this.width = width          // constructor ar vitore ja take sobi Intance Member

    // this.draw = function (){
    //     console.log(draw)
    // }
}
Square.prototype = {
    draw : function (){         //prototype ar vitore ja take ta Prototype Member 
        console.log('draw')
    },
    toString: function() {
        return 'My width is =' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)
