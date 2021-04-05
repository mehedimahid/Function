

                        //178 Asynchronous Programming is Action in Javascript |
// console.log('I am line one')

// setTimeout(() => {
//     console.log('I am line two')
// }, 3000)

// setTimeout(() => {
//     console.log('i am line three')
// },0)

// console.log('i am line four')

// setTimeout(() => {
//     console.log('i am line five')
// },1000)


// setTimeout(() =>{
//     console.log('i have done')
// },3000)



                        // 179 How to Store result from Async Function in Javascript

// function sayMyName(name){
//     let result
//     setTimeout(() =>{
//         result = name
//         console.log('i have done.....')
//     },3000)
//     return result
// }
// let outPut = sayMyName('MH Mahid')
// console.log(outPut)


// function sayMyName(name) {
//     setTimeout(() => {
//         console.log(name)
//     },3000)
// }


// let outPut = sayMyName('MH Mahid')
// console.log(outPut)



                                //185 Ajax with Callback in Javascript 

// http://jsonplaceholder.typicode.com/

// const xhr = new XMLHttpRequest()
// xhr.open('get', 'http://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e) {
//     if (xhr.readyState === 4){
//         if(xhr.status === 200){      //Details => https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
//             let user = JSON.parse(xhr.response)
//             console.log(user)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()


// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)
//     xhr.onreadystatechange = function(e) {
//         if (xhr.readyState === 4){
//             if(xhr.status === 200){      
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             }else{
//                 callback(xhr.status, null)
//             }
//         }
//     }
    
//     xhr.send()
// }


// getRequest('http://jsonplaceholder.typicode.com/users', (err, res) =>{
//     if(err){
//         console.log(err)
//     }else{
//         // console.log(res)
//         res.forEach(r => console.log(r.name))
//     }
// })


// getRequest('http://jsonplaceholder.typicode.com/posts', (err, res) =>{
//     if(err){
//         console.log(err)
//     }else{
//         // console.log(res)
//         res.forEach(r => console.log(r.title))      //r = singular post obj portek p. obj. ar vitor title ase
            
        
//     }
// })


                            //186 Callback Not Always Asynchronous in Javascript


// let arr =[1, 2, 3, 4, 5]

// let sqrArr = arr.map(v => v*v)
// console.log(sqrArr)


// function asynMap(arr, cb) {
//     return arr.map(v =>{
//         // setTimeout(cb.bind(null, v), 0)
//         setTimeout(() => cb(v), 0)
//     })
// }

// let qbArr = asynMap(arr, v =>{
//     console.log(v)
// })
// console.log(qbArr)



                            //187 Why Not Callback in Javascript 
                            //real code noy don't run this

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)
//     xhr.onreadystatechange = function(e) {
//         if (xhr.readyState === 4){
//             if(xhr.status === 200){      
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             }else{
//                 callback(xhr.status, null)
//             }
//         }
//     }
    
//     xhr.send()
// }


// const BASE_URl = 'http://jsonplaceholder.typicode.com'


// getRequest (`${BASE_URl}/posts/1`, (err, res) =>{
//     if(err){
//         throw new Error('Error Occurred')
//     }

//     let {userId} = res

//     getRequest(`${BASE_URl}/users/${userId}`, (err, res) =>{
//         if(err){

//             throw new Error('Error Occurred')
//         }

//         getRequest(`${BASE_URl}/posts/comments/${res.id}`,(err, res) =>{

//             if(err){

//             throw new Error('Error Occurred')
//             }

//             console.log(res)
//         })
//     })
// })


                        //188 Introduction to Promise in Javascript


// let P1 = new Promise((resolve, reject) => {

//     setTimeout(resolve, 5000, 'One')  
// })

// let P2 = new Promise((resolve,reject) =>{
//     setTimeout(resolve, 3000, 'Two')
// })

// // console.log(P1)
// // console.log(P2)

// P1.then((v) =>{
//     console.log(v)
// })

// P2.then((v) =>{
//     console.log(v)
// })



// function getIphone(isPassed) {
//     return new Promise((resolve, reject) => {
//         setTimeout (() =>{
//             if(isPassed){
//                 resolve('I have got an I Phone')
//             } else{
//                 reject(new Error('you have failed'))
//             }
//         },2000)
//     })
// }

// // console.log(getIphone(true))
// // console.log(getIphone(false))

// getIphone(false)
//     .then((v) =>{
//         console.log(v)
//     })
//     .catch((e) => {
//         // console.log(e)
//         console.log(e.message)
//     })





