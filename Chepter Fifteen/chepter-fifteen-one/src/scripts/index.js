import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

// alert('Hey, I Have Done Everything Perfectly. ')



// var s = `  My Bangla
//     of Gold
//       i love
//         u`
// console.log(s.trim())   //trim() samoner space dur kore dey

// var age = 20
// var name = 'MH Mahid'
// console.log('My name is ' + name + ' and I am ' + age + ' years old')
// console.log(`My name is ${name} and I am ${age} years old. I am ${age <18 ? 'not ': '' }adult`)

// console.log(name.padStart(15, '*')) //suppos akta string ar size 15 hote hobe tokon padStart samone *ar jaygay ja bosabo ta dara puron korbe 
// console.log(name.padEnd(15,'0')) //sese bosabe
//  //padStart ba padEnd length baranor kaj kore

//  console.log('S'.repeat(10)) //kno kisu ke repeat korte chaile avabe korte hobe

// //                                                 //**Arrow Functions tutorial number 142

//                 //simple function
// var add = function(){
//     return 'something add'
// }

// //                 // Arrow Function


// // let add = (a, b) => a + b       
// // console.log(add(45, 50))


// // let sqr = x => x*x          //jodi 1 ta parameter take tahole ai vabe hobe
// // console.log(sqr(7))

//                                          //**Arrow Functions and This. tutorial number 143

// //  let obj = {
// //     name : 'MH Mahid',
// //     print : function() {
// //     console.log(this)
// //     }
// //  }

// //  obj.print()
                                        
// // let obj = {
// //     name : 'MH Mahid',
// //     print : () => {
// //         console.log(this)
// //     }
// // }
// // obj.print()

// // let obj2 = {
// //     name:'MH Mahid',
// //     print : function(){
// //         setTimeout(() =>{
// //             console.log(`Hellow, ${this.name}`)
// //         }, 3000)
// //     }
// // }
// // obj2.print()

//                                         // Tutorial 144 Default Parameters
  
//                     //old solution

// // function sqr1(n ){
// //     if(!n){
// //         n = 1
// //     }
// //     console.log(n*n)
// // }
// // sqr1(4)

// // function sqr3(n){
// //     n = n || 1
// //     console.log(n*n)
// // }
// // sqr3(5)

//                 // new solution(Default Parameters)

// // function sqr(n =1){
// //     console.log(n*n)
// // }
// // sqr()


// // function greet(name, msg){
// //     console.log(`${msg}! ${name}`)
// // }
// // greet(null, 'hellow')


// // function greet(name = 'User', msg = 'Hellow'){
// //     console.log(`${msg}! ${name}`)
// // }
// // greet(/*null ,*/ /*'Hello'*/)      //Default Parameters beboher korle tokon null/undefine beboher kora jabe na



//                                 //Tutorial number145 Rest and Spread Operator in Javascript

//                                  //Rest Operator
//         //past solotion

// // function sum() {
// //     let Sum = 0

// //     for (let i = 0; i < arguments.length; i++) {
// //         Sum += arguments[i]
        
// //     }
// //     return Sum
// // }

// // console.log(sum(1, 2, 3, 4, 5))

// //                     // new solution

// // function add(...rest){                //Rest Operator
// //     return rest.reduce((a, b) => a+b)
// // }
// // console.log(add(1, 2, 3, 4, 5))

//                                  //Spread Operator

// // let a =[1, 2, 3, 4, 5]
// // console.log(a)

// // console.log(...a)       //Spread Operator

// // let obj ={
// //     a: 10,
// //     b: 20,
// //     c: 30
// // }

// // let obj2 = {
// //     ...obj                  //version ar somosar karone error dekabe 
// // }

//                             //Tutorial number 146 Enhance Object in Javascript


// // let a = 10, b = 20
// // let obj = {
// //    /* old solution
// //     a: a,
// //     b: b
// //     print : function(){
// //         console.log(this)
// //     },

// //     new solution*/
// //     a,
// //     b,
// //     print(){
// //         console.log(this)
// //     }
// // }

// // obj.print()

//                                 //Tutorial number 147 Destructuring in Javascript
// /** ** */
// // let person ={
// //     name: 'MH Mahid',
// //     email: "mehedimahid19@gmail.com",
// //     address:{
// //         city : 'Rangpur',
// //         country: 'Bangladesh'
// //     }
// // }
//             //object teke property ber kore ante chaile avabe korte hobe

// // let{name, email, address:{city, country}} = person
// // console.log(name, email, city, country)

// let arr = [1, 2, 3, 4, 5]
// let[first, second, , , last ] = arr         //joto gor bad jabe thoto ta , koma dite hobe

// console.log(first, second, last)


                            //Tutorial Number 148 Object From Entries in Javascript 
                    //object hote arr rupantor
let obj ={
    a: 10,
    b: 20
}

console.log(Object.entries(obj))

                        //arr hote obj a rupantor

let arr =[
    ['a', 10],
    ['b', 20]
]
console.log(Object.fromEntries(arr))


                                    //Tutorial number 149 Symbols in Javascript

let s1 = Symbol() 
let s2 = Symbol('Test Symbol') 

console.log(s1)
console.log(s2)

console.log(s1 === s2)









