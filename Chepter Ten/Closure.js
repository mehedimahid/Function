
//Tutorial Number 96

//  function test() {

//      var msg = ' I am learning Lexical Scope and Closure'

//      function sayMsg() {

//          console.log(msg)

//      }

//      sayMsg()
//  }

//  test()




 function test() {
     
    var msg = ' I am learning Lexical Scope and Closure'

     return function() {

        console.log(msg)

    }
}

var sayMsg = test()
sayMsg()