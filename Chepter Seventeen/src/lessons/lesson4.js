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
// let p1 = new Promise(resolve =>{
//     setTimeout(resolve, 5000, 'Test Value')
// })

// async function myAsyncFun(){
//     // p1.then(v => alert(v))
//     let v = await p1
//     console.log(v)
// }

// myAsyncFun()



// async function fetchData() {
//     try {
//         let res = await fetch('http://jsonplaceholder.typicode.com/users')

//         let data = await res.json()
//         // console.log(data)

//         let name = data.map(u => u.name)
//         console.log(name)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// // fetchData()

// let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]


// async function promiseAll(){
//     let result = await Promise.all(promises)
//     console.log(result)
// }

// promiseAll()


// 192 Async Iterator in Javascript

// let asyncItarable = {
//     [Symbol.asyncIterator]() {
//         let i = 0;
//         return {
//             next() {
//                 if (i < 5) {
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }


// let itarate = asyncItarable[Symbol.asyncIterator]();

// console.log(itarate.next())

// (async function(){
//     // let v = await itarate.next()
//     // console.log(v)
//     console.log(await itarate.next())
//     console.log(await itarate.next())
//     console.log(await itarate.next())
//     console.log(await itarate.next())
//     console.log(await itarate.next())
//     console.log(await itarate.next())
//     console.log(await itarate.next())
// })()


// (async function(){
//     for await(let v of asyncItarable){
//         console.log(v)
//     }
// })()

async function* myAsyncGenerator() {
    let i = 0
    while (true) {
        if (i > 5) return
        yield await Promise.resolve(i++)
    }
}


; (async function () {
    for await (let v of myAsyncGenerator()) {
        console.log(v)
    }
})()

