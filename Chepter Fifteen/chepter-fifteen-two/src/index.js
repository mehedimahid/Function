// import "./style.css";

import "./style.scss";

// console.log('hello ES6 by ')
// console.log("***Hello webpack!")
// console.log('hello babrl 7')


                                    //151 Iterator Basics in Javascript ES5

const arr = [1, 2, 3]

// function creatIterator(collection){
//     let i = 0
//     return{
//         next(){
//             return{
//                 done : i>= collection.length ,
//                 value: collection[i++]
//             }            
//         }
//     }
// }

// let iterate = creatIterator(arr)
// console.log(iterate.next())     //akbare sob result dibe na akta akta kore dibe
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())



                        //152 Iterator with Symbol in Javascript ES6

// let iterate = arr[Symbol.iterator]()        //ES5 ar kaj ES6 sotto kore deya

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'TEXT'
// let iterateText = str[Symbol.iterator]()
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())
// console.log(iterateText.next())



//                                     //153 For of Loop in Javascript



// for(let v of arr){
//     console.log(v)
// }


// for(let v of 'MH Mahid'){
//     console.log(v)
// }

                    //object ar ketre for of loop kaj korbe na
// let obj = {
//     a :10,
//     b :20
// }
// for (let v of obj) {
//     console.log(v)
// }


                //obj ke iterate korar niyom
                //145 Custom Iteratable Object in Javascript 
let obj ={
    start: 1,
    end: 5,
    // [Symbol.iterator]: function(){
    //     let currentValue = this.start
    //     let self = this
    //     return{
    //         next(){
    //             return{
    //                 done: currentValue > self.end,
    //                 value: currentValue > self.end ? undefined : currentValue++
    //             }
    //         }
    //     }
    // }
                                //154 Generators in Javascript
                                //oporer coder kaj ta generator diye korle arokom hobe
    // [Symbol.iterator]: function* (){
    //     let currentValue = this.start
    //     while(currentValue < this.end){
    //         yield currentValue++
    //     }
    // }
}

   
  


// for (let v of obj) {
//     console.log(v)
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
                          
                            //generator je vabe kaj kore
// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

// function* generate(collection){
//     for (let i = 0; i < collection.length; i++) {
//         yield collection[i]
//     }
// }


// let it = generate(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())




                                        //155 Set in Javascript 

let set = new Set([1, 2, 3])
set.add(4)
set.add(5)
set.add(1)          //duplicate hobe na 
set.add(2)
// console.log(set)
// console.log(set.size)
// set.clear()      //sob clear kore dibe
// console.log(set)

// set.delete(4)       //kno kisu dilete korte chaile 
console.log(set.has(5))      //kno value ase ki nai ta chake korbe
console.log(set)
set.toJSON()
console.log(set)




















































































































































