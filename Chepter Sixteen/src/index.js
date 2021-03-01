// import "./style.css";

import "./style.scss";

// let n = 10

// if(n > 5){
//     throw new Error('N is getter then 5')
// }

// let rang =56

// if(rang > 50){
//     throw new RangeError('the number is too long')
// }


                        //171 Error Handling with If Else in Javascript

// function changToInt(v){
//     let result = Number.parseInt(v)
//     if(!result){
//         return 'Please provide a value which is able to convert ib integer'
        
//     }
//     return result
// }

// // let result = changToInt('adffg85.66')
// let result = changToInt('88.66')

// console.log(result)


                            //172 Error Handling with Try Catch in Javascript |

// function makeWords(text){
//     try{
//         let str = text.trim()
//         let words = str.split('  ')
//         return words
//     }catch(e){
//         // console.log(e.message)
//         console.log('Please provide a valid text')
//     }
//     // let str = text.trim()
//     //     let words = str.split('  ')
//     //     return words
// }

// // let words = makeWords(85)
// let words = makeWords('        I am MH Mahid        ')
// console.log(words)


                            //173 Throwing an Error in Javascript 

// try{
//     console.log('i am line 1')
//     throw new Error('i am your Error')
//     console.log('i am line 2')
//     console.log('i am line 3')
//     console.log('i am line 4')
// }catch(e){
//     console.log(e.message)
// }


                    //174 Finally Block in Javascript 

// try{
//      console.log('i am line 1')
//     throw new Error('i am your Error')
//     console.log('i am line 2')
//     console.log('i am line 3')
//     console.log('i am line 4')
// }catch(e){
//     console.log(e.message)
// }finally{
//     console.log('i am finaly block')
// }


                    //175 Optional Catch Binding in Javascript
// try{
//     console.log('i am line 1')
//    throw new Error('i am your Error')
//    console.log('i am line 2')
//    console.log('i am line 3')
//    console.log('i am line 4')
// }catch{
//    console.log('This is a Custom Error message')
// }finally{
//    console.log('i am finaly block')
// }


                //176 Custom Error in Javascript

class CustomError extends Error{
    constructor(msg){
        super(msg)
        if (Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}

 try{
        console.log('i am line 1')
       throw new CustomError('i am your Error')
       console.log('i am line 2')
       console.log('i am line 3')
       console.log('i am line 4')
    }catch(e){
        console.dir(e)
        console.log('This is a Custom Error message')
    }finally{
       console.log('i am finaly block')
    }



