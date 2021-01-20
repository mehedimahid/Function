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

// let set = new Set([1, 2, 3])
// set.add(4)
// set.add(5)
// set.add(1)          //duplicate hobe na 
// set.add(2)
// console.log(set)
// console.log(set.size)
// set.clear()      //sob clear kore dibe
// console.log(set)

// set.delete(4)       //kno kisu dilete korte chaile 
// console.log(set.has(5))      //kno value ase ki nai ta chake korbe
// console.log(set)
// console.log(set.keys())
// console.log(set.values())

// let keysIterate = set.keys()
// console.log(keysIterate.next())

// let valueIterate = set.keys()
// console.log(valueIterate.next())

// console.log(isIterable(set))

// for (let v of set) {
//     console.log(v)
// }

// console.log(set.entries())

                                    //156 Map in Javascript

// let map = new Map([             //map a jekono kisu keys hote pare
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)
// map.set({name:'MH Mahid'}, 30)
// map.delete('c')              //keys dite hobe values hobe na
// console.log(map)
// console.log(map.size)
// console.log(map.get('a'))               //kon key ar value ta amra chassi
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())


// for (let [k, v] of map) {       //[keys, values]
//     console.log(v, k)
// }

// map.forEach((v, k) =>{              //(values, keys)
//     console.log(k, v)
// })


                                    //158 Weak Set in Javascript

let a = {a: 10}, b = {b: 20}

// let set = new Set([a, b])
// a= null                     //avabe kaj korte hobe

// console.log(set)

// let arr = [...set]
// console.log(arr)
// console.log(arr[0])


// let weakSet = new WeakSet([a, b])
// console.log(weakSet)
// a = null

// console.log(weakSet)
// console.log(weakSet.has(a))
// console.log(weakSet.has(b))


//                                                         //159 Weak Map in Javascript

// let weakMap = new WeakMap ([[a, 45], [b, 70]])
// a= null
// console.log(weakMap)
// console.log(weakMap.get(a))
// console.log(weakMap.has(a))
// console.log(weakMap.has(b))


                                    //160 Class in Javascript

    //chep. 13,14 
// function Rectangle(width, height){
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function(){
//     console.log(this)
//     console.log('Drawing....')
// }

// let rect1 = new Rectangle(12, 25)


// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     name = 'MH Mahid'

//     draw(){
//         console.log(drawing)
//     }
// }

// let rect1 = new Rectangle(63, 60)
// console.log(rect1)
// console.log(typeof Rectangle)




















































































































































