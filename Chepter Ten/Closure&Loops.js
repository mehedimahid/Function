

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function(){                      //return only 6
//         console.log(i)
//     }, 1000 * i)
    
// }




// An IIFE (Immediately Invoked Function Expression) is a JavaScript 
//--function that runs as soon as it is defined.

//  (function () {
//         statements
//   })();

for (var i = 1; i <= 5; i++) {
    (function(n){
        setTimeout(function(){                      //return(1 to 5)
        console.log(n)
         }, 1000 * n)
    })(i)
}