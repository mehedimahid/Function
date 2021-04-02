
            //190 Promise API in Javascript


// const delay = s => new Promise(resolve => setTimeout(resolve, s*1000)) 

// delay(2).then(() => console.log('2 second delay'));
// delay(1).then(() => console.log('1 second delay'));
// delay(4).then(() => console.log('4 second delay'));
// delay(3).then(() => console.log('3 second delay'));
// delay(5).then(() => console.log('5 second delay'));


// let p1 = Promise.resolve('Resolve')
// p1.then(v => console.log(v))


// let p2 = Promise.reject('Reject')
// p2.catch(e => console.log(e))


// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')
// // let p3 = Promise.reject('Three')

// let promiseArr =[p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr =>{
//         console.log(arr)
//     })
//     // .catch(e =>{
//     //     console.log(e)
//     // })



// let p1 = new Promise(resolve =>{setTimeout(resolve, 5000, 'One')} )
// let p2 = new Promise(resolve =>{setTimeout(resolve, 3000, 'Two')} )
// let p3 = new Promise(resolve =>{setTimeout(resolve, 4000, 'Three')} )

// let promiseArr =[p1, p2, p3]

// Promise.all(promiseArr)
//     .then(arr =>{
//         console.log(arr)
//     })

// Promise.race(promiseArr)
//     .then(v => console.log(v))

                            //191 Async Await in Javascript 

// function myPromise(){
//     return Promise.resolve('Test Value')
// }

// console.log(myPromise())

//বিকল্প 

// async function test(){
//     return 'Test Value'
// }

// // test().then(v => alert(v))
// console.log(test())

// let p1 = Promise.resolve('I am a Promise')
let p1 = new Promise(resolve =>{
    setTimeout(resolve, 5000, 'Test Value')
})

async function myAsyncFun(){
    // p1.then(v => alert(v))
    let v = await p1
    console.log(v)
}

myAsyncFun()
















